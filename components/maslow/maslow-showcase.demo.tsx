import { AuroraBackground, AuroraButton, GlassCard } from "./index";

export function MaslowShowcase() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Aurora Background */}
            <AuroraBackground intensity={0.7} />

            {/* Main Content */}
            <div className="container relative z-10 mx-auto px-4 py-16">
                <div className="mb-16 text-center">
                    <h1 className="text-aurora-primary animate-gradient-x mb-6 text-6xl font-bold">Maslow Design System</h1>
                    <p className="mx-auto mb-8 max-w-2xl text-xl text-white/80">
                        Human-centered AI with living, breathing interfaces powered by aurora gradients and glassmorphism
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <AuroraButton variant="primary" size="lg" glow>
                            Get Started
                        </AuroraButton>
                        <AuroraButton variant="ghost" size="lg">
                            Learn More
                        </AuroraButton>
                    </div>
                </div>

                {/* Feature Cards */}
                <div className="mb-16 grid gap-6 md:grid-cols-3">
                    <GlassCard intensity="medium" floating interactive gradient="aurora">
                        <div className="p-6">
                            <h3 className="mb-3 text-xl font-semibold text-white">Aurora Gradients</h3>
                            <p className="mb-4 text-white/80">Dynamic 7-color gradients that breathe life into every interface element.</p>
                            <AuroraButton variant="secondary" size="sm">
                                Explore
                            </AuroraButton>
                        </div>
                    </GlassCard>

                    <GlassCard intensity="medium" floating interactive gradient="warm">
                        <div className="p-6">
                            <h3 className="mb-3 text-xl font-semibold text-white">Glassmorphism</h3>
                            <p className="mb-4 text-white/80">Advanced glass effects with 3D tilt interactions and perfect blur.</p>
                            <AuroraButton variant="warm" size="sm">
                                Try It
                            </AuroraButton>
                        </div>
                    </GlassCard>

                    <GlassCard intensity="medium" floating interactive gradient="cool">
                        <div className="p-6">
                            <h3 className="mb-3 text-xl font-semibold text-white">3D Backgrounds</h3>
                            <p className="mb-4 text-white/80">WebGL-powered aurora backgrounds with real-time mouse interaction.</p>
                            <AuroraButton variant="primary" size="sm">
                                View Demo
                            </AuroraButton>
                        </div>
                    </GlassCard>
                </div>

                {/* Component Showcase */}
                <div className="mb-16">
                    <h2 className="mb-8 text-center text-3xl font-bold text-white">Component Library</h2>

                    {/* Button Variants */}
                    <GlassCard intensity="strong" className="mb-8">
                        <div className="p-8">
                            <h3 className="mb-6 text-2xl font-semibold text-white">Aurora Buttons</h3>

                            <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                                <AuroraButton variant="primary" className="w-full">
                                    Primary
                                </AuroraButton>
                                <AuroraButton variant="secondary" className="w-full">
                                    Secondary
                                </AuroraButton>
                                <AuroraButton variant="ghost" className="w-full">
                                    Ghost
                                </AuroraButton>
                                <AuroraButton variant="warm" className="w-full">
                                    Warm
                                </AuroraButton>
                            </div>

                            <div className="flex justify-center gap-4">
                                <AuroraButton variant="primary" size="sm">
                                    Small
                                </AuroraButton>
                                <AuroraButton variant="primary" size="md">
                                    Medium
                                </AuroraButton>
                                <AuroraButton variant="primary" size="lg">
                                    Large
                                </AuroraButton>
                                <AuroraButton variant="primary" size="xl">
                                    X-Large
                                </AuroraButton>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Glass Effects */}
                    <GlassCard intensity="strong">
                        <div className="p-8">
                            <h3 className="mb-6 text-2xl font-semibold text-white">Glass Effects</h3>

                            <div className="grid gap-4 md:grid-cols-3">
                                <GlassCard intensity="subtle" gradient="aurora">
                                    <div className="p-4 text-center">
                                        <h4 className="mb-2 font-semibold text-white">Subtle</h4>
                                        <p className="text-sm text-white/70">Light glass effect</p>
                                    </div>
                                </GlassCard>

                                <GlassCard intensity="medium" gradient="warm" floating>
                                    <div className="p-4 text-center">
                                        <h4 className="mb-2 font-semibold text-white">Medium</h4>
                                        <p className="text-sm text-white/70">Balanced effect</p>
                                    </div>
                                </GlassCard>

                                <GlassCard intensity="strong" gradient="cool" interactive>
                                    <div className="p-4 text-center">
                                        <h4 className="mb-2 font-semibold text-white">Strong</h4>
                                        <p className="text-sm text-white/70">Maximum blur</p>
                                    </div>
                                </GlassCard>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <GlassCard intensity="strong" className="mx-auto max-w-2xl">
                        <div className="p-8">
                            <h2 className="mb-4 text-3xl font-bold text-white">Ready to Build?</h2>
                            <p className="mb-6 text-lg text-white/80">Start creating beautiful interfaces with the Maslow Design System today.</p>

                            <div className="flex justify-center gap-4">
                                <AuroraButton variant="primary" size="lg" glow morphing>
                                    Start Building
                                </AuroraButton>
                                <AuroraButton variant="ghost" size="lg">
                                    View Documentation
                                </AuroraButton>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </div>

            {/* Floating Aurora Elements */}
            <div className="bg-aurora-primary animate-float fixed left-10 top-20 h-64 w-64 rounded-full opacity-20 blur-3xl" />
            <div
                className="bg-aurora-secondary animate-float fixed bottom-20 right-10 h-96 w-96 rounded-full opacity-15 blur-3xl"
                style={{ animationDelay: "2s" }}
            />
        </div>
    );
}

export default MaslowShowcase;
