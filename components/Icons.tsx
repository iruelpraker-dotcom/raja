
import React from 'react';
import { 
  Droplets, 
  Trash2, 
  Hammer, 
  Phone, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  LogOut, 
  Settings, 
  Menu, 
  X,
  MessageCircle,
  Star,
  Zap,
  CheckCircle2,
  Construction,
  Truck,
  Bath,
  Utensils,
  Sparkles
} from 'lucide-react';

export const IconMap: Record<string, React.ReactNode> = {
  toilet: <Construction className="w-8 h-8" />,
  utensils: <Utensils className="w-8 h-8" />,
  bath: <Bath className="w-8 h-8" />,
  truck: <Truck className="w-8 h-8" />,
  shield: <ShieldCheck className="w-6 h-6" />,
  clock: <Clock className="w-6 h-6" />,
  zap: <Zap className="w-6 h-6" />,
  phone: <Phone className="w-5 h-5" />,
  whatsapp: <MessageCircle className="w-5 h-5" />,
  map: <MapPin className="w-5 h-5" />,
  star: <Star className="w-4 h-4 text-yellow-400 fill-current" />,
  check: <CheckCircle2 className="w-5 h-5 text-green-500" />,
  sparkle: <Sparkles className="w-6 h-6 text-blue-500" />
};

export { 
  Droplets, Trash2, Hammer, Phone, ShieldCheck, Clock, 
  MapPin, LogOut, Settings, Menu, X, MessageCircle, Star, Zap, CheckCircle2,
  Sparkles
};
