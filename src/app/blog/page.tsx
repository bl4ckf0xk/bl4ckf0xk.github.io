"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, ChevronDown, Search } from "lucide-react";
import { useState, useMemo } from "react";

import { blogs } from "@/data/blogs";
import { useEffect, useRef } from "react";

type SortOption = "newest" | "oldest" | "readTimeAsc" | "readTimeDesc";

const sortOptions: { value: SortOption; label: string }[] = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "readTimeAsc", label: "Read Time: Short → Long" },
    { value: "readTimeDesc", label: "Read Time: Long → Short" },
];

// Helper to parse date string to Date object
function parseDate(dateStr: string): Date {
    return new Date(dateStr);
}

// Helper to extract minutes from readTime string (e.g., "2 min read" → 2)
function parseReadTime(readTime: string): number {
    const match = readTime.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
}

export default function BlogPage() {
    const [sortBy, setSortBy] = useState<SortOption>("newest");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Filter and sort posts
    const filteredPosts = useMemo(() => {
        // First filter by search query
        let posts = blogs.filter((post) => {
            if (!searchQuery.trim()) return true;
            const query = searchQuery.toLowerCase();
            return (
                post.title.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query) ||
                post.tags.some((tag) => tag.toLowerCase().includes(query))
            );
        });

        // Then sort
        switch (sortBy) {
            case "newest":
                posts.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
                break;
            case "oldest":
                posts.sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());
                break;
            case "readTimeAsc":
                posts.sort((a, b) => parseReadTime(a.readTime) - parseReadTime(b.readTime));
                break;
            case "readTimeDesc":
                posts.sort((a, b) => parseReadTime(b.readTime) - parseReadTime(a.readTime));
                break;
        }
        return posts;
    }, [sortBy, searchQuery]);

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
                    <span className="text-hacker-red">/</span> Transmission Log
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Thoughts, tutorials, and research notes on software development, security, and technology.
                </p>
            </div>

            {/* Search and Sort Filters */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                {/* Search Input */}
                <div className="relative flex-1 max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search size={18} className="text-gray-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-white placeholder-gray-500 focus:outline-none focus:border-hacker-blue/50 focus:ring-1 focus:ring-hacker-blue/50 transition-all duration-300"
                    />
                </div>

                {/* Results Count */}
                <div className="text-sm font-mono text-gray-400">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
                </div>

                {/* Sort Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono text-gray-300 hover:border-hacker-blue/50 hover:text-hacker-blue transition-all duration-300"
                    >
                        <span>Sort: {sortOptions.find(o => o.value === sortBy)?.label}</span>
                        <ChevronDown size={16} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 top-full mt-2 w-56 bg-black/90 border border-white/10 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.1)] backdrop-blur-xl z-20">
                            {sortOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => {
                                        setSortBy(option.value);
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full px-4 py-3 text-left text-sm font-mono transition-all duration-200 ${
                                        sortBy === option.value
                                            ? 'bg-hacker-blue/20 text-hacker-blue border-l-2 border-hacker-blue'
                                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="space-y-24">
                {filteredPosts.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-mono text-white mb-2">No posts found</h3>
                        <p className="text-gray-400 font-mono">Try adjusting your search query</p>
                    </div>
                ) : (
                    filteredPosts.map((post, index) => (
                    <Link key={index} href={`/blog/${post.slug}`}>
                        <GlassCard className="group relative overflow-hidden rounded-2xl p-6 md:p-8 hover:border-hacker-blue transition-all duration-500 mb-8 border border-white/10 bg-white/5 hover:bg-white/[0.07]">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-hacker-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="text-hacker-blue/70 group-hover:text-hacker-blue transition-colors" size={14} /> {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="text-hacker-blue/70 group-hover:text-hacker-blue transition-colors" size={14} /> {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-hacker-red transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 bg-hacker-blue/10 text-hacker-blue border border-hacker-blue/30 font-mono text-xs uppercase tracking-widest rounded transition-colors group-hover:border-hacker-blue/50">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-gray-400 group-hover:border-hacker-red/50 group-hover:text-hacker-red group-hover:bg-hacker-red/10 transition-all duration-300 shadow-[0_0_0_rgba(255,0,60,0)] group-hover:shadow-[0_0_15px_rgba(255,0,60,0.2)]">
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </Link>
                ))
                )}
            </div>
        </div>
    );
}
