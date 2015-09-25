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
        private static List<String> _connections = new List<string>();

        public class NotificationMessage
        {
            public String message;
            public int millis;
        }

        public void Publish(NotificationMessage message)
        {
            Task.Delay(message.millis).ContinueWith((antecedent) => {
                foreach (var connection in _connections){
                    Clients.Client(connection).notification(message.message);
                }
            });
        }

        public void Subscribe()
        {
            _connections.Add(Context.ConnectionId);
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            _connections.Remove(Context.ConnectionId);

            return base.OnDisconnected(stopCalled);
        }

        public override Task OnConnected()
        {

            return base.OnConnected();
        }
    }
}