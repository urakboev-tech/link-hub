import { Github, Linkedin, Instagram, Twitter, MessageCircle, Mail, Globe, Youtube } from 'lucide-react';

export const userData = {
    name: "Abdulloh Urakboyev",
    bio: "Solution Architect | Yechimlar Arxitektori ",
    avatar: "/avatar.jpg.png" // Rasm nomi pkasida .jpg.png bo'lib saqlangan ekan
};

export const socialLinks = [
    {
        id: 1,
        name: "Telegram",
        url: "https://t.me/Abdulloh_Uchqun_Urakboev",
        icon: MessageCircle,
        color: "hover:text-cyan-400 hover:scale-110"
    },
    {
        id: 2,
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: Linkedin,
        color: "hover:text-blue-500 hover:scale-110"
    },
    {
        id: 3,
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: Github,
        color: "hover:text-white hover:scale-110"
    },
    {
        id: 4,
        name: "Instagram",
        url: "https://instagram.com/yourusername",
        icon: Instagram,
        color: "hover:text-pink-500 hover:scale-110"
    }
];

export const actionLinks = [
    {
        id: 1,
        title: "Shaxsiy Veb-saytim",
        url: "https://example.com",
        icon: Globe,
        description: "Portfolio va xizmatlar bilan tanishish"
    },
    {
        id: 3,
        title: "Telegram Blog",
        url: "https://t.me/yourchannel",
        icon: MessageCircle,
        description: "IT sohasi bo'yicha foydali maqolalar"
    },
    {
        id: 4,
        title: "Menga Elektron Xat Yozing",
        url: "mailto:hello@example.com",
        icon: Mail,
        description: "Hamkorlik va takliflar uchun"
    },
    {
        id: 5,
        title: "GitHub Loyihalarim",
        url: "https://github.com/yourusername",
        icon: Github,
        description: "Ochiq kodli dasturlarim"
    }
];
