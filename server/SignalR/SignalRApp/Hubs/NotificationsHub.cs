using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace SignalRApp.Hubs
{
    [HubName("notifications")]
    public class NotificationsHub: Hub
    {
        private static List<String> _subscribers = new List<string>();

        public class NotificationMessage
        {
            public String message;
            public int millis;
        }

        #region Public Methods

        public void Publish(NotificationMessage message)
        {
            Task.Delay(message.millis).ContinueWith((antecedent) => {
                foreach (var connection in _subscribers){
                    Clients.Client(connection).notification(message.message);
                }
            });
        }

        public void Subscribe()
        {
            _subscribers.Add(Context.ConnectionId);
        }

        #endregion

        #region overrides

        public override Task OnDisconnected(bool stopCalled)
        {
            _subscribers.Remove(Context.ConnectionId);

            return base.OnDisconnected(stopCalled);
        }

        #endregion
    }
}