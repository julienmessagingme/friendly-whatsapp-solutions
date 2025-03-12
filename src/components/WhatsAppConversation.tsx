
import { motion } from 'framer-motion';

interface Message {
  sender: 'city' | 'citizen';
  content: string | React.ReactNode;
  image?: string;
}

interface WhatsAppConversationProps {
  messages: Message[];
  className?: string;
}

const WhatsAppConversation = ({ messages, className }: WhatsAppConversationProps) => {
  return (
    <div className={`bg-[#e5ddd5] rounded-lg p-4 h-[600px] overflow-y-auto ${className}`}>
      <div className="bg-[#128C7E] text-white p-3 rounded-t-lg -mx-4 -mt-4 mb-4">
        <div className="font-semibold">Mairie de Ludon sur Oise</div>
        <div className="text-sm opacity-80">En ligne</div>
      </div>
      <div className="space-y-3">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${message.sender === 'citizen' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === 'citizen'
                  ? 'bg-[#dcf8c6] text-gray-800'
                  : 'bg-white text-gray-800'
              }`}
            >
              {typeof message.content === 'string' ? (
                <div className="whitespace-pre-wrap">{message.content}</div>
              ) : (
                message.content
              )}
              {message.image && (
                <img src={message.image} alt="Conversation attachment" className="mt-2 rounded-lg w-full" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatsAppConversation;
