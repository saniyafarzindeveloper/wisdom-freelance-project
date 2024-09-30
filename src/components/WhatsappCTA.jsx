import { FloatingWhatsApp } from "react-floating-whatsapp";
import Logo from "../assets/logo.png";

function WhatsappCTA() {
  return (
    <div className="fixed bottom-10 right-5 z-50">
      <FloatingWhatsApp
        phoneNumber="+919673087669"
        placeholder="Send your doubts/queries"
        accountName="Wisdom Education"
        avatar={Logo}
        allowEsc
        chatMessage="Hello! Welcome to Wisdom Education. How can we help you?"
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}

export default WhatsappCTA;
