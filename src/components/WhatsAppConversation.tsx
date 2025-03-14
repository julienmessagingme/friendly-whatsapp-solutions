
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

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
    <div className={`bg-[#e5ddd5] rounded-lg p-1.5 h-full overflow-y-auto ${className}`}>
      <div className="bg-[#128C7E] text-white p-1.5 rounded-t-lg -mx-1.5 -mt-1.5 mb-1.5 flex items-center">
        <div className="bg-white/10 rounded-full p-0.5 mr-1">
          <Shield size={12} className="text-white" />
        </div>
        <div>
          <div className="font-semibold text-[10px] sm:text-xs">Mairie de Ludon sur Oise</div>
          <div className="text-[8px] sm:text-[10px] opacity-80">En ligne</div>
        </div>
      </div>
      <div className="space-y-1.5">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${message.sender === 'citizen' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-1 ${
                message.sender === 'citizen'
                  ? 'bg-[#dcf8c6] text-gray-800'
                  : 'bg-white text-gray-800'
              }`}
            >
              {typeof message.content === 'string' ? (
                <div className="whitespace-pre-wrap text-[10px]">{message.content}</div>
              ) : (
                <div className="text-[10px]">{message.content}</div>
              )}
              {message.image && (
                <img src={message.image} alt="Conversation attachment" className="mt-1 rounded-lg w-full" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatsAppConversation;
