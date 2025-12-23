import React from 'react';
import { Award, TrendingUp, Users, Zap } from 'lucide-react';

const CertificationsAchievements = () => {
    const achievements = [
        {
            icon: TrendingUp,
            title: "Performance Optimization",
            description: "Improved system performance by 60% through code optimization and architecture redesign",
            color: "blue"
        },
        {
            icon: Users,
            title: "Team Leadership",
            description: "Led cross-functional teams of 5-8 engineers on mission-critical projects",
            color: "purple"
        },
        {
            icon: Zap,
            title: "Rapid Delivery",
            description: "Consistently delivered projects 20% ahead of schedule through agile methodologies",
            color: "green"
        },
        {
            icon: Award,
            title: "Quality Excellence",
            description: "Maintained 85%+ code coverage and reduced production bugs by 70%",
            color: "orange"
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: "bg-blue-100 text-blue-600 border-blue-200",
            purple: "bg-purple-100 text-purple-600 border-purple-200",
            green: "bg-green-100 text-green-600 border-green-200",
            orange: "bg-orange-100 text-orange-600 border-orange-200"
        };
        return colors[color];
    };

    return (
        <section className="container mx-auto px-4 py-12 animate-fadeIn">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Professional Excellence & Leadership
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Recognized for technical excellence, innovation, and consistent delivery of high-impact solutions
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 border-2 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className={`w-16 h-16 rounded-full ${getColorClasses(item.color)} flex items-center justify-center mb-4 border-2`}>
                                <Icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    );
                })}
            </div>

            {/* Professional Certifications (you can add your actual certifications here) */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Technical Expertise & Methodologies
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="p-4">
                        <div className="font-bold text-gray-900 mb-1">Agile/Scrum</div>
                        <div className="text-sm text-gray-600">3+ years experience</div>
                    </div>
                    <div className="p-4">
                        <div className="font-bold text-gray-900 mb-1">System Design</div>
                        <div className="text-sm text-gray-600">Enterprise Architecture</div>
                    </div>
                    <div className="p-4">
                        <div className="font-bold text-gray-900 mb-1">DevOps</div>
                        <div className="text-sm text-gray-600">CI/CD & Automation</div>
                    </div>
                    <div className="p-4">
                        <div className="font-bold text-gray-900 mb-1">Cloud Native</div>
                        <div className="text-sm text-gray-600">Microservices Expert</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CertificationsAchievements;
