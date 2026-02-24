import React from 'react';
import Footer from './Footer';

export default function Terms() {
    return (
        <section className="pt-32 pb-6 px-6 max-w-4xl mx-auto w-full flex flex-col gap-6">
            <div className="prose prose-invert prose-p:text-[var(--text-muted)] prose-headings:text-white prose-a:text-hearth-orange hover:prose-a:text-[#E86A33] prose-li:text-[var(--text-muted)] max-w-none prose-h2:tracking-tight prose-h1:tracking-tight prose-h1:mb-2 prose-h2:mt-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Terms of Service</h1>
                <p className="font-medium text-[15px] opacity-70 mb-10 !text-white/70">Last Updated: October 26, 2025</p>

                <h2>Acceptance of Terms</h2>
                <p>By accessing or using Hearth ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.</p>

                <h2>Description of Service</h2>
                <p>Hearth is a mobile application that helps users reduce food waste by managing their kitchen inventory and generating personalized recipes using AI technology. The App provides:</p>
                <ul>
                    <li>Food inventory tracking and management</li>
                    <li>AI-powered recipe generation based on available ingredients</li>
                    <li>Meal planning and dietary preference customization</li>
                    <li>Recipe saving and organization features</li>
                </ul>

                <h2>User Accounts</h2>
                <p>To use certain features of the App, you must create an account. You are responsible for:</p>
                <ul>
                    <li>Maintaining the confidentiality of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Ensuring the accuracy of information you provide</li>
                    <li>Notifying us immediately of any unauthorized access</li>
                </ul>

                <h2>Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul>
                    <li>Use the App for any illegal purpose</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt the App's functionality</li>
                    <li>Copy, modify, or distribute the App without permission</li>
                    <li>Use the App to harm others or violate their rights</li>
                </ul>

                <h2>AI-Generated Content</h2>
                <p>Hearth uses Claude AI by Anthropic to generate recipe recommendations. While we strive for accuracy:</p>
                <ul>
                    <li>AI-generated recipes are suggestions and may require human judgment</li>
                    <li>You are responsible for verifying food safety and suitability</li>
                    <li>We are not liable for issues arising from following AI-generated recipes</li>
                    <li>Always use common sense when preparing and consuming food</li>
                </ul>

                <h2>Dietary Information Disclaimer</h2>
                <p>Hearth provides general dietary information and recipe suggestions. The App is not a substitute for professional medical or nutritional advice. Always consult with qualified healthcare professionals regarding:</p>
                <ul>
                    <li>Dietary restrictions and allergies</li>
                    <li>Medical conditions affecting food choices</li>
                    <li>Nutritional needs and meal planning</li>
                    <li>Food safety concerns</li>
                </ul>

                <h2>Intellectual Property</h2>
                <p>The App and its original content, features, and functionality are owned by Hearth and are protected by international copyright, trademark, and other intellectual property laws.</p>

                <h2>Subscription and Payments</h2>
                <p>When the App launches with paid features:</p>
                <ul>
                    <li>Subscription fees will be clearly disclosed before purchase</li>
                    <li>Payments are processed through secure third-party providers</li>
                    <li>Refund policies will be provided at the time of purchase</li>
                    <li>You can cancel your subscription at any time</li>
                </ul>

                <h2>Termination</h2>
                <p>We reserve the right to suspend or terminate your account if you violate these Terms. You may also delete your account at any time through the App settings.</p>

                <h2>Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, Hearth shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the App.</p>

                <h2>Changes to Terms</h2>
                <p>We reserve the right to modify these Terms at any time. We will notify users of any material changes. Your continued use of the App after changes constitutes acceptance of the new Terms.</p>

                <h2>Contact Information</h2>
                <p>For questions about these Terms of Service, please contact us at:<br />
                    <a href="mailto:hello@usehearth.app" aria-label="Email Hello at Hearth" className="inline-flex items-center min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-hearth-orange focus-visible:outline-none rounded px-2 -mx-2 mt-2 font-semibold">
                        hello@usehearth.app
                    </a>
                </p>
            </div>

            <Footer />
        </section>
    );
}
