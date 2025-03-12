
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
    <div className={`bg-[#e5ddd5] rounded-lg p-2 h-full overflow-y-auto ${className}`}>
      <div className="bg-[#128C7E] text-white p-2 rounded-t-lg -mx-2 -mt-2 mb-2 flex items-center">
        <div className="bg-white/10 rounded-full p-1 mr-1.5">
          <Shield size={14} className="text-white" />
        </div>
        <div>
          <div className="font-semibold text-xs sm:text-sm">Mairie de Ludon sur Oise</div>
          <div className="text-xs opacity-80">En ligne</div>
        </div>
      </div>
      <div className="space-y-2">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${message.sender === 'citizen' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-1.5 sm:p-2 ${
                message.sender === 'citizen'
                  ? 'bg-[#dcf8c6] text-gray-800'
                  : 'bg-white text-gray-800'
              }`}
            >
              {typeof message.content === 'string' ? (
                <div className="whitespace-pre-wrap text-xs sm:text-sm">{message.content}</div>
              ) : (
                message.content
              )}
              {message.image && (
                <img src={message.image} alt="Conversation attachment" className="mt-1.5 rounded-lg w-full" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatsAppConversation;
