"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Terminal, Cpu, Shield, Award, Briefcase, ExternalLink, FileText } from "lucide-react";
import Script from "next/script";
import { useRef, useEffect } from "react";

const skills = [
    { category: "Exploit Development", items: ["Windows Internals", "Buffer Overflow", "Reverse Engineering", "C/C++", "Assembly", "GDB"] },
    { category: "Active Directory & Red Teaming", items: ["Kerberos", "LDAP", "Red Teaming", "PowerShell", "BloodHound", "Web Application Security", "Cyber Threat Intelligence"] },
    { category: "ICS/OT Security", items: ["SCADA", "PLC", "Modbus", "DNP3", "Industrial Networks"] },
    { category: "Cloud & DevSecOps", items: ["AWS", "GCP", "Microsoft Azure", "Kubernetes", "GitOps", "ArgoCD"] },
    { category: "Software Development", items: ["Node.js", "React.js", "TypeScript", "Python", "SQL"] },
    { category: "Data Science & MLOps", items: ["Machine Learning", "Scikit-Learn", "pandas", "MLflow"] },
    { category: "Certifications", items: ["AD-RTS", "CRTA", "COWA", "MCRTA", "Cisco CyberOps", "SOC L1/L2"] }
];
const certBadges = [
    {
        id: "aws-cloud-club-captain",
        image: "/certs/aws-cloud-club-captain-2.png",
        link: "https://www.credly.com/badges/041dabd6-b1d3-4dea-b627-f9bd9329eaf3/public_url"
    },
    {
        id: "cyberops-associate",
        image: "/certs/cyberops-associate.png",
        link: "https://www.credly.com/badges/e9834ecc-64d4-4fb0-ba31-d37fa749c789/public_url" // Update with real link if different
    },
    {
        id: "meta-frontend",
        image: "/certs/meta-front-end-developer-certificate.png",
        link: "https://www.credly.com/badges/4cf947d4-5300-4dc7-a59b-a3de7caabe92/public_url" // Update with real link if different
    },
    {
        id: "ifs-ai-fundamentals",
        image: "/certs/ifs-learning-achievement-ifs-ai-fundamentals-ifs-cl.png",
        link: "https://www.credly.com/badges/9cdb2eb0-961c-4a90-82e4-cfcd78ba9e7f/public_url" // Update with real link if different
    },
    {
        id: "ifs-ai-enabling",
        image: "/certs/ifs-learning-achievement-enabling-ifs-ai-ifs-cloud.png",
        link: "https://www.credly.com/badges/f2e40437-e1e0-44e5-b34e-b0806d41e016/public_url" // Update with real link if different
    },
    {
        id: "ifs-web-dev",
        image: "/certs/ifs-learning-achievement-advanced-web-development-c.png",
        link: "https://www.credly.com/badges/7ee43386-4760-424d-9c59-297ebf232f7b/public_url" // Update with real link if different
    },
    {
        id: "aws-ai-generative-learning-cloud-quest",
        image: "/certs/aws-cloud-quest-generative-ai-practitioner-training.png",
        link: "https://www.credly.com/badges/17e80ef8-a3b9-4588-b71a-3a579129d2ad/public_url" // Update with real link if different
    }
];

const documentCerts = [
    {
        id: "thm-cert",
        image: "/certificates/THM-LXNPIOPQCS.png",
        link: "/certificates/THM-LXNPIOPQCS.pdf"
    },
    {
        id: "htb-cert",
        image: "/certificates/Certificate-bl4ckf0xk.png",
        link: "/certificates/Certificate-bl4ckf0xk.pdf"
    },
    {
        id: "training-cert",
        image: "/certificates/Kavindu_Sahan.png",
        link: "/certificates/Kavindu_Sahan.pdf"
    },
    {
        id: "completion-cert",
        image: "/certificates/certificate.png",
        link: "/certificates/certificate.pdf"
    },
    {
        id: "additional-cert",
        image: "/certificates/image.webp",
        link: "/certificates/image.webp"
    },
    {
        id: "cert-new-1",
        image: "/certificates/1758375144857.jpeg",
        link: "/certificates/1758375144857.jpeg"
    },
    {
        id: "cert-new-2",
        image: "/certificates/tincel_trace.png",
        link: "/certificates/1766370970330.pdf"
    },
    {
        id: "aws-cloud-quest-generative-ai-practitioner-training",
        image: "/certificates/AWS_AI_Cloud_Quest.png",
        link: "/certificates/f33b27e6-3cbf-4d33-b35b-16077af4f586.pdf"
    }
];

const journey = [
    { year: "2026 Feb", title: "AWS Cloud Club Captain at IIT", description: "Appointed as the AWS Cloud Club Captain at IIT for the term of 2026/27." },
    { year: "2026 Feb", title: "First Event Hosted", description: "Hosted my first event, 'Cyber Handshake' for the WiCys Sri Lanka Chapter." },
    { year: "2025", title: "First physical chess tournament", description: "Participated in the first physical chess tournament and won 4/5 games." },
    { year: "2025", title: "Advanced Certifications", description: "Earned AD-RTS, CRTA, COWA, and MCRTA from CyberWarFare Labs. Reached Pro Hacker Level in Hack The Box." },
    { year: "2024 - Present", title: "Technical Consultant & BSc CS", description: "Working as a Technical Consultant at Inivos and pursuing a BSc in Computer Science at the University of Westminster. AWS Cloud Club Captain at IIT." },
    { year: "2024", title: "HTB Prolabs & Certs", description: "Completed Dante and Full House Prolabs. Achieved Cisco CyberOps Associate and TryHackMe SOC certifications." },
    { year: "2023 - 2024", title: "Customer Service & Internships", description: "Gained operational experience as a Customer Service Associate at Dialog Axiata PLC and as an Intern at Sampath Bank, optimizing branch operations and data analysis." },
    { year: "2023", title: "Exploit Development Focus", description: "Deep dive into reverse engineering, buffer overflows, and custom exploit development." },
    { year: "2022", title: "TryHackMe Top 1%", description: "Reached top 1% globally and ranked 6th in Sri Lanka on TryHackMe. Ranked 185th island-wide in the Technology Stream for the G.C.E. Advanced Level Examination." },
    { year: "2020", title: "The Beginning", description: "Started formal education in cybersecurity, focusing on network security and ethical hacking. Achieved 9 A's in the G.C.E. Ordinary Level Examination." }
];

const achievements = [
    {
        title: "AWS Cloud Club Captain",
        description: "IIT (Informatics Institute of Technology)",
        icon: Award,
        colorClass: "text-hacker-blue",
        bgClass: "bg-hacker-blue/10"
    },
    {
        title: "2nd Place - Ideathon",
        description: "IIT CuttingEdge Exhibition",
        icon: Award,
        colorClass: "text-hacker-blue",
        bgClass: "bg-hacker-blue/10"
    },
    {
        title: "748th - Cyber Apocalypse CTF",
        description: "Top 15% among 5694 teams",
        icon: Briefcase,
        colorClass: "text-hacker-red",
        bgClass: "bg-hacker-red/10"
    }
];

export default function AboutPage() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 font-mono">
                        <span className="text-hacker-blue">whoami</span>
                    </h1>

                    <div className="prose prose-invert prose-lg text-gray-300 mb-12">
                        <p className="text-xl font-bold text-white mb-4">
                            Kavindu Sahan (aka bl4ckf0xk)
                        </p>
                        <p>
                            I&apos;m a dedicated cybersecurity professional with more than 4 years of experience in protecting critical infrastructure and developing custom security solutions. My passion lies in understanding the intricacies of system compromise and building robust defenses against sophisticated attacks.
                        </p>
                        <p>
                            Specializing in <span className="text-hacker-blue">Exploit Development</span>, I create custom tools and techniques to identify vulnerabilities before malicious actors can exploit them. My work in <span className="text-hacker-red">ICS/OT Security</span> focuses on protecting industrial control systems that are critical to our infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-12">
                        <GlassCard className="p-4 flex items-center gap-3">
                            <Terminal className="text-hacker-blue" />
                            <span className="font-mono text-sm">Exploit Dev</span>
                        </GlassCard>
                        <GlassCard className="p-4 flex items-center gap-3">
                            <Shield className="text-hacker-red" />
                            <span className="font-mono text-sm">ICS/OT Sec</span>
                        </GlassCard>
                        <GlassCard className="p-4 flex items-center gap-3">
                            <Cpu className="text-hacker-blue" />
                            <span className="font-mono text-sm">AD Security</span>
                        </GlassCard>
                        <GlassCard className="p-4 flex items-center gap-3">
                            <Award className="text-hacker-red" />
                            <span className="font-mono text-sm">Red Teaming</span>
                        </GlassCard>
                    </div>

                    <h2 className="text-2xl font-bold mb-6 font-mono flex items-center gap-2">
                        <span className="text-hacker-blue">./</span> Skills & Expertise
                    </h2>

                    <div className="space-y-4">
                        {skills.map((skillGroup, index) => (
                            <GlassCard key={index} className="p-5">
                                <h3 className="text-lg font-bold mb-3 text-gray-200">{skillGroup.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <span key={skill} className="px-3 py-1 rounded text-sm font-mono bg-white/5 text-gray-400 border border-white/10 hover:text-hacker-blue hover:border-hacker-blue/50 transition-colors cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-8 font-mono flex items-center gap-2">
                        <span className="text-hacker-red">&gt;</span> The Journey
                    </h2>

                    <div className="space-y-8 border-l-2 border-white/10 pl-8 ml-4 relative">
                        {journey.map((item, index) => (
                            <div key={index} className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-2 border-hacker-blue" />
                                <div className="mb-1 flex items-center gap-3">
                                    <span className="text-hacker-blue font-mono font-bold">{item.year}</span>
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-bold mb-6 font-mono flex items-center gap-2">
                            <span className="text-hacker-blue">./</span> Achievements
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            {achievements.map((achievement, index) => {
                                const Icon = achievement.icon;
                                return (
                                    <GlassCard key={index} className="p-4 flex gap-4 items-start">
                                        <div className={`p-2 rounded-lg ${achievement.bgClass} ${achievement.colorClass}`}>
                                            <Icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{achievement.title}</h4>
                                            <p className="text-sm text-gray-400">{achievement.description}</p>
                                        </div>
                                    </GlassCard>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Certifications & Badges Section */}
            <div className="mt-20">
                <h2 className="text-2xl font-bold mb-8 font-mono flex items-center gap-2">
                    <span className="text-hacker-blue">./</span> Certifications & Badges
                </h2>

                <div className="relative w-full overflow-hidden marquee-fade-edges py-12">
                    {/* The animate-marquee class scrolls translateX from 0 to -50% */}
                    <div className="flex w-max animate-marquee gap-12 hover:animation-paused items-center">
                        {/* We duplicate the array to create the infinite scroll effect seamlessly */}
                        {[...certBadges, ...certBadges, ...certBadges].map((badge, index) => {
                            return (
                                <BadgeItem key={`${badge.id}-${index}`} badge={badge} />
                            );
                        })}
                    </div>
                </div>

                {/* Document Certificates Section */}
                <div className="mt-20">
                    <h2 className="text-2xl font-bold mb-8 font-mono flex items-center gap-2">
                        <span className="text-hacker-blue">./</span> Document Certificates
                    </h2>

                    <div className="relative w-full overflow-hidden marquee-fade-edges py-12">
                        <div className="flex w-max animate-marquee gap-12 hover:animation-paused items-center">
                            {[...documentCerts, ...documentCerts, ...documentCerts].map((cert, index) => {
                                return (
                                    <BadgeItem
                                        key={`doc-${cert.id}-${index}`}
                                        badge={cert}
                                        imgClass="w-48 h-64 md:w-[450px] md:h-[350px] object-contain pointer-events-none"
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Separate component to handle the individual scroll animations
function BadgeItem({ badge, imgClass }: { badge: typeof certBadges[0], imgClass?: string }) {
    const ref = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const updateStyle = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            // Calculate center of the element
            const elementCenter = rect.left + rect.width / 2;
            // Calculate center of the viewport
            const viewportCenter = window.innerWidth / 2;

            // Calculate how far the element is from the center (absolute distance)
            const distance = Math.abs(viewportCenter - elementCenter);

            // Adjust zoom spread based on viewport width
            const isMobile = window.innerWidth <= 768;
            const isLarge = imgClass?.includes('md:w-[450px]');

            // Larger items need more spread to trigger the zoom correctly across their width
            const baseDistance = isLarge ? 450 : 350;
            const maxDistance = isMobile ? (isLarge ? 200 : 150) : baseDistance;

            const maxScale = isMobile ? 1.05 : 1.18;


            let scale = 1;
            let glow = 0;

            // Linear interpolation for zoom and glow intensity
            if (distance < maxDistance) {
                const progress = 1 - (distance / maxDistance);
                // Ease the animation curve
                const easedProgress = Math.pow(progress, 1.8);

                scale = 1 + (maxScale - 1) * easedProgress;
                glow = easedProgress;
            }

            // Directly mutate DOM for 60fps performance without React re-renders (fixes the "buggy" feeling)
            ref.current.style.transform = `scale(${scale})`;
            ref.current.style.filter = `drop-shadow(0 0 ${glow * 25}px rgba(0,240,255,${glow * 0.7}))`;
            ref.current.style.zIndex = glow > 0.5 ? "20" : "1";
        };

        let animationFrameId: number;
        const animate = () => {
            updateStyle();
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <a
            ref={ref}
            href={badge.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-block will-change-transform"
        >
            <img
                src={badge.image}
                alt="Certification Badge"
                className={imgClass || "w-32 h-32 md:w-[250px] md:h-[250px] object-contain pointer-events-none"}
            />
        </a>
    );
}
