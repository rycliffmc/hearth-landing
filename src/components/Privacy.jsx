import React from 'react';
import Footer from './Footer';

export default function Privacy() {
    return (
        <section className="pt-32 pb-6 px-6 max-w-4xl mx-auto w-full flex flex-col gap-6">
            <div className="prose prose-invert prose-p:text-[var(--text-muted)] prose-headings:text-white prose-a:text-hearth-orange hover:prose-a:text-[#E86A33] prose-li:text-[var(--text-muted)] max-w-none prose-h2:tracking-tight prose-h1:tracking-tight prose-h1:mb-2 prose-h2:mt-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Privacy Policy</h1>
                <p className="font-medium text-[15px] opacity-70 mb-10 !text-white/70">Last Updated: October 26, 2025</p>

                <h2>Overview</h2>
                <p>At Hearth, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our application.</p>

                <h2>Information We Collect</h2>
                <p>When you sign up for our waitlist, we collect your name and email address. Once the app launches, we will collect:</p>
                <ul>
                    <li>Account information (name, email, profile preferences)</li>
                    <li>Food inventory data (ingredients you add to your pantry)</li>
                    <li>Recipe preferences and dietary restrictions</li>
                    <li>Usage data (features you use, recipes you save)</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul>
                    <li>Provide personalized recipe recommendations</li>
                    <li>Track your food inventory and reduce waste</li>
                    <li>Improve our AI-powered meal generation</li>
                    <li>Send you product updates and announcements</li>
                    <li>Enhance the overall user experience</li>
                </ul>

                <h2>Data Security</h2>
                <p>We implement industry-standard security measures to protect your personal information. Your data is encrypted in transit and at rest. We never sell your personal information to third parties.</p>

                <h2>Third-Party Services</h2>
                <p>Hearth uses Claude AI by Anthropic to generate personalized recipes. When you use our recipe generation features, your inventory data is processed by Anthropic's API, subject to Anthropic's privacy policy.</p>

                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Access your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your account and data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Export your data</li>
                </ul>

                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:<br />
                    <a href="mailto:hello@usehearth.app" aria-label="Email Hello at Hearth" className="inline-flex items-center min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-hearth-orange focus-visible:outline-none rounded px-2 -mx-2 mt-2 font-semibold">
                        hello@usehearth.app
                    </a>
                </p>
            </div>

            <Footer />
        </section>
    );
}
