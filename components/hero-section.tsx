import Image from "next/image"
import Link from "next/link"


export function HeroSection() {
  return (
    <section className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
      {/* Announcement Banner */}
      <div className="mb-12 rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-foreground">
        <span className="font-medium">Open to opportunities!</span> I am actively looking for full-time positions, and collaborations in AI/ML. Here is my{" "}
        <Link href="/cv.pdf" target="_blank" className="text-amber-700 hover:underline">
          Resume
        </Link>
        .
      </div>

      <div className="grid gap-12 md:grid-cols-[300px_1fr] lg:gap-16">
        {/* Left Column - Photo and Info */}
        <div className="space-y-6">
          <div className="aspect-square overflow-hidden rounded-lg border-4 border-amber-100">
            <Image
              src="me.jpg"
              alt="Aru Sharma"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Aru Sharma</h1>
            <p className="text-muted-foreground leading-relaxed">
              B.E. Information Technology Student at
              <br />
              University Institute of Engineering and Technology, PU
            </p>
          </div>

        </div>

        {/* Right Column - Bio */}
        <div className="space-y-6">
          <div>
            <p className="text-foreground leading-relaxed">
              <span className="font-semibold">About Me:</span> I am passionate about building intelligent systems that
              bridge the gap between human communication and machine understanding.{" "}
              <span className="font-semibold">
                I build multimodal AI systems, contribute to open-source projects, and explore the intersection of NLP
                and Computer Vision.
              </span>{" "}
              My approach to engineering is to study where current solutions fall short in real-world applications, and
              develop practical improvements that make AI more accessible and useful.
            </p>
          </div>

          <div>
            <p className="text-foreground leading-relaxed">
              <span className="font-semibold">Experience:</span> My journey involves significant contributions to open-source ecosystems.
              I worked as OSS contributor at{" "}
              <Link href="https://summerofcode.withgoogle.com/archive/2025/projects/ffITbKjg" target="_blank" className="text-amber-700 hover:underline">
                Google Summer of Code
              </Link>{" "}
              with{" "}
              <Link href="https://mifos.org/" target="_blank" className="text-amber-700 hover:underline">
                Mifos Initiative
              </Link>
              , developing multi-agent bots. I interned at{" "}
              <Link href="https://www.summerofbitcoin.org/orgs-details/chatbtc/r/recpQ9M1ICA0vRqu9" target="_blank" className="text-amber-700 hover:underline">
                Summer of Bitcoin
              </Link>{" "}
              to contribute to {" "}
              <Link href="https://github.com/bitcointranscripts/tstbtc" target="_blank" className="text-amber-700 hover:underline">
                Bitcoin Transcripts
              </Link>
              . I was also an{" "}
              <Link href="https://mentorship.lfx.linuxfoundation.org/mentee/33a5d49f-f505-45f1-8a8f-c3ba7edbcda3" target="_blank" className="text-amber-700 hover:underline">
                LFX Mentee
              </Link>{" "}
              at{" "}
              <Link href="https://wasmedge.org/" target="_blank" className="text-amber-700 hover:underline">
                CNCF WasmEdge
              </Link>
              , and contributed to{" "}
              <Link href="https://github.com/ucbepic/docetl" target="_blank" className="text-amber-700 hover:underline">
                DocETL
              </Link>{" "}
              at UC Berkeley&apos;s EPIC Lab. I have also worked as an AI Engineer with{" "}
              <Link href="https://bennettlegal.com/" target="_blank" className="text-amber-700 hover:underline">
                Bennett Legal
              </Link>{" "}
              and{" "}
              <Link href="https://homehive.ai/" target="_blank" className="text-amber-700 hover:underline">
                HomeHive AI
              </Link>
              , and conducted risk analysis for crypto tokens.
            </p>
          </div>

          <div>
            <p className="text-foreground leading-relaxed">
              <span className="font-semibold">Community:</span> I lead the OSS club{" "}
              <Link href="https://www.instagram.com/pclubuiet/" target="_blank" className="text-amber-700 hover:underline">
                (Pclub)
              </Link>{" "}
              at my college to promote OSS. I also hosted events like{" "}
              <Link href="https://www.instagram.com/sfdpu/" target="_blank" className="text-amber-700 hover:underline">
                Software Freedom Day
              </Link>
              , OSS hackathons like{" "}
              <Link href="https://fossunited.org/fosshack/2025" target="_blank" className="text-amber-700 hover:underline">
                FOSSHACK
              </Link>{" "}
              and started AISOC so that students can get familiar with how to start contributing to OSS.
            </p>
          </div>

          <div>
            <p className="text-foreground leading-relaxed">
              <span className="font-semibold">Achievements:</span> Selected for the first edition of{" "}
              <Link href="https://www.esoc.dev/" className="text-amber-700 hover:underline">
                ESOC&apos;25
              </Link>{" "}
              under the Open-Source AI for Drug Discovery project.
              Ranked 15 globally on the{" "}
              <Link href="https://drive.google.com/file/d/1cBMYmUosHYnW4asM4LQUeavrjZNghp10/view?usp=drive_link" className="text-amber-700 hover:underline">
                NTIRE Image Dehazing and Denoising challenge
              </Link>{" "}
              at CVPR 2024.
              Published research on Speech Emotion Recognition accepted at the 16th ICCCNT 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
