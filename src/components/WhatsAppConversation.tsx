
import { motion } from 'framer-motion';
import { Shield, CheckCheck } from 'lucide-react';

interface Message {
  sender: 'city' | 'citizen';
  content: string | React.ReactNode;
  image?: string;
  isRead?: boolean;
}

interface WhatsAppConversationProps {
  messages: Message[];
  className?: string;
  verified?: boolean;
}

const WhatsAppConversation = ({ messages, className, verified = false }: WhatsAppConversationProps) => {
  return (
    <div className={`bg-[#e5ddd5] rounded-lg p-1 h-full overflow-y-auto ${className}`}>
      <div className="bg-[#128C7E] text-white p-1 rounded-t-lg -mx-1 -mt-1 mb-1 flex items-center">
        <div className="bg-white/10 rounded-full p-0.5 mr-1">
          <Shield size={10} className="text-white" />
        </div>
        <div className="flex items-center">
          <div className="font-semibold text-[8px] sm:text-[10px]">Mairie de Ludon sur Oise</div>
          {verified && (
            <div className="ml-1 bg-blue-500 rounded-full flex items-center justify-center" style={{ width: '8px', height: '8px' }}>
              <Shield size={5} className="text-white" />
            </div>
          )}
          <div className="text-[6px] sm:text-[8px] opacity-80 ml-1">En ligne</div>
        </div>
      </div>
      <div className="space-y-1">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${message.sender === 'citizen' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-0.5 ${
                message.sender === 'citizen'
                  ? 'bg-[#dcf8c6] text-gray-800'
                  : 'bg-white text-gray-800'
              }`}
            >
              {typeof message.content === 'string' ? (
                <div className="whitespace-pre-wrap text-[8px]">{message.content}</div>
              ) : (
                <div className="text-[8px]">{message.content}</div>
              )}
              {message.image && (
                <img src={message.image} alt="Conversation attachment" className="mt-1 rounded-lg w-full" />
              )}
              {message.sender === 'citizen' && message.isRead && (
                <div className="flex justify-end mt-0.5">
                  <CheckCheck size={8} className="text-blue-500" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatsAppConversation;
