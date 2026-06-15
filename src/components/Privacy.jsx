import React from 'react';
import Footer from './Footer';

export default function Privacy() {
    return (
        <section className="pt-32 pb-6 px-6 max-w-4xl mx-auto w-full flex flex-col gap-6">
            <div className="prose prose-invert prose-p:text-[var(--text-muted)] prose-headings:text-white prose-a:text-hearth-orange hover:prose-a:text-[#E86A33] prose-li:text-[var(--text-muted)] max-w-none prose-h2:tracking-tight prose-h1:tracking-tight prose-h1:mb-2 prose-h2:mt-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Privacy Policy</h1>
                <p className="font-medium text-[15px] opacity-70 mb-10 !text-white/70">Last Updated: June 14, 2026</p>

                <h2>Overview</h2>
                <p>At Hearth, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our application.</p>

                <h2>Information We Collect</h2>
                <p>When you sign up for our waitlist, we collect your name and email address. Inside the application, we collect and store:</p>
                <ul>
                    <li><strong>Account Information:</strong> Name, email address, and profile preferences.</li>
                    <li><strong>Kitchen Inventory Data:</strong> Food items, ingredients, and expiration dates you add to your fridge, pantry, or freezer. To protect your identity, this data is tied to a secure, randomized user identifier (pseudonymous data) rather than your personal details.</li>
                    <li><strong>Recipe and Preferences:</strong> Saved recipes, shopping lists, and dietary restrictions.</li>
                    <li><strong>Usage Data:</strong> App features utilized, interface interactions, and performance diagnostics.</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul>
                    <li>Provide personalized recipe recommendations</li>
                    <li>Track your food inventory and reduce waste</li>
                    <li>Power our real-time interactive chat and recipe parsing features</li>
                    <li>Send you product updates and announcements</li>
                    <li>Enhance the overall application user experience</li>
                </ul>

                <h2>AI Features and Beta Data Processing</h2>
                <p>Hearth utilizes advanced artificial intelligence services to power core functionalities like intelligent chat support and camera-based recipe image scanning.</p>
                <p><strong>Beta Phase Processing:</strong> Please note that during our current beta testing period, data submitted explicitly and directly through these interactive AI features (such as your typed chat messages or uploaded recipe photos) is processed via Google Gemini in Firebase and may be utilized by the provider for model training. No other background account data, inventory data, or general profile information is ever transmitted or used for machine learning training.</p>
                <p>Upon our formal public release, all interactive AI features will transition entirely to private data processing flows that do not utilize user submissions for model training.</p>

                <h2>Third-Party Services</h2>
                <p>Hearth leverages industry-leading infrastructure providers to deliver its services. Our application data is hosted using Google Firebase. For automated meal recommendations and recipe generation, data is processed using API integrations with Anthropic (Claude AI) and Google Gemini, subject to their respective third-party privacy protocols.</p>

                <h2>Data Security</h2>
                <p>We implement industry-standard security measures to protect your personal information. Your data is encrypted in transit and at rest. We never sell your personal information or database collections to third parties.</p>

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
