import { Mail, Phone, MapPin, ArrowRight, Briefcase, GraduationCap, Scale, BookOpen, Award, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Section } from "@/components/section"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="container grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
                Abir Ahamed Sijar
                <span className="block text-2xl md:text-3xl font-normal mt-2 text-gray-600">Legal Professional</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-md">
                Dedicated to providing exceptional legal counsel with integrity, expertise, and a commitment to justice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact">
                  <Button size="lg" className="gap-2 bg-[#1f2839] hover:bg-[#1f2839]/95 w-full">
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/abirahamed (3).pdf" download="Abir_Ahamed_Sijar_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="gap-2 border-[#1f2839] hover:bg-[#1f2839]/10 text-[#1f2839] hover:text-[#1f2839]/120 w-full">
                    Download Resume
                    <Download className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-square max-w-md mx-auto md:ml-auto">
              <Image
                src="/sijar.JPG"
                alt="Abir Ahamed Sijar"
                width={500}
                height={500}
                className="rounded-md object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-md pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <Section id="about" bgColor="bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                I am a dedicated legal professional with a strong academic foundation in law and a passion for justice.
                After completing my LLB with honors, I have focused on developing expertise in criminal law,
                civil law, and family law.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My approach combines thorough legal research, strategic thinking, and clear communication to achieve the
                best possible outcomes for my clients. I believe in making legal processes accessible and
                understandable, guiding clients through complex situations with clarity and confidence.
              </p>
              <p className="text-lg text-gray-700">
                Whether representing individuals or organizations, I am committed to upholding the highest ethical
                standards and providing personalized attention to each case.
              </p>
            </div>
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Education & Credentials</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 flex items-start gap-4 border border-[#1f2839] rounded-lg">
                  <div className="mt-1">
                    <GraduationCap className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Masters of Laws (LLM)</h3>
                    <p className="text-gray-600 mb-2">University of Rajshahi, 2025-Present</p>
                    <p className="text-sm text-gray-600">
                      Pursuing Masters degree after graduation to specialize on the sectors I have interst in.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4 border border-[#1f2839] rounded-lg">
                  <div className="mt-1">
                    <GraduationCap className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Bachelor of Laws (LLB)</h3>
                    <p className="text-gray-600 mb-2">Varendra University, 2021-2024</p>
                    <p className="text-sm text-gray-600">
                      Graduated with First Class Honors. Specialized in Criminal Law, Civil Law and Family Law.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start gap-4 border border-[#1f2839] rounded-lg">
                  <div className="mt-1">
                    <GraduationCap className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Higher Secondary Certificate (HSC)</h3>
                    <p className="text-gray-600 mb-2">New Govt. Degree College, Rajshahi, 2018-2020</p>
                    <p className="text-[16px] text-gray-600">
                      Passed my HSC in Business Studies with a first class GPA.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* <Card>
                <CardContent className="p-6 flex items-start gap-4 border border-[#1f2839] rounded-lg">
                  <div className="mt-1">
                    <Award className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Bar Council Certification</h3>
                    <p className="text-gray-600 mb-2">State Bar Council, 2022</p>
                    <p className="text-sm text-gray-600">
                      Licensed to practice law across all courts in the jurisdiction.
                    </p>
                  </div>
                </CardContent>
              </Card> */}

              {/* <Card>
                <CardContent className="p-6 flex items-start gap-4 border border-[#1f2839] rounded-lg">
                  <div className="mt-1">
                    <BookOpen className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Certificate in International Law</h3>
                    <p className="text-gray-600 mb-2">Global Law Institute, 2023</p>
                    <p className="text-sm text-gray-600">
                      Advanced studies in international legal frameworks and cross-border litigation.
                    </p>
                  </div>
                </CardContent>
              </Card> */}

              <Card>
                <CardContent className="p-6 flex items-start gap-4 border border-[#1f2839] rounded-lg">
                  <div className="mt-1">
                    <Briefcase className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-0">Legal Research (Thesis)</h3>
                    <p className="text-gray-600 mb-0 text-xs">Sexual Harrasement as a Barrier to Women Empowerment: A Case Analysis</p>
                    <p className="text-xs text-gray-600">
                      Conducted research on a case study to showcase "Sexual Harrasement as a Barrier to Women Empowerment" the proof of my thesis with proper findings and research papers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Expertise Section */}
        <Section id="expertise" bgColor="bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Areas of Expertise</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* <Card>
                <CardContent className="p-6 space-y-2 border border-[#1f2839] rounded-lg">
                  <h3 className="font-semibold text-lg">Constitutional Law</h3>
                  <p className="text-sm text-gray-600">
                    Specializing in fundamental rights cases, constitutional interpretation, and public interest
                    litigation.
                  </p>
                </CardContent>
              </Card> */}

              <Card>
                <CardContent className="p-6 space-y-2 border border-[#1f2839] rounded-lg">
                  <h3 className="font-semibold text-lg">Corporate Law</h3>
                  <p className="text-sm text-gray-600">
                    Advising businesses on compliance, contracts, mergers and acquisitions, and corporate governance.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-2 border border-[#1f2839] rounded-lg">
                  <h3 className="font-semibold text-lg">Criminal Defense</h3>
                  <p className="text-sm text-gray-600">
                    Representing clients in criminal proceedings with a focus on due process and fair trial rights.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-2 border border-[#1f2839] rounded-lg">
                  <h3 className="font-semibold text-lg">Family Law</h3>
                  <p className="text-sm text-gray-600">
                    Handling divorce, child custody, adoption, and other family-related legal matters with sensitivity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-2 border border-[#1f2839] rounded-lg">
                  <h3 className="font-semibold text-lg">Civil Law</h3>
                  <p className="text-sm text-gray-600">
                    Dealing with disputes between individuals or organizations over rights, obligations, contracts, property, and personal matters.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-2 border border-[#1f2839] rounded-lg">
                  <h3 className="font-semibold text-lg mt-1">Tax Law</h3>
                  <p className="text-[12px] text-gray-600">
                    Governing the assessment, collection, and regulation of taxes, and advising individuals and businesses on tax compliance and planning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* Case Studies Section 
        <Section id="cases">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Notable Cases</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="border-b pb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="font-semibold text-xl">Smith v. State Government</h3>
                  <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">Constitutional Law</span>
                </div>
                <p className="text-gray-700">
                  Successfully challenged unconstitutional provisions affecting citizens rights, resulting in landmark
                  judgment.
                </p>
              </div>

              <div className="border-b pb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="font-semibold text-xl">Tech Innovations Merger</h3>
                  <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">Corporate Law</span>
                </div>
                <p className="text-gray-700">
                  Facilitated a complex merger between two technology companies, ensuring regulatory compliance and
                  protecting stakeholder interests.
                </p>
              </div>

              <div className="pb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="font-semibold text-xl">Public Interest Environmental Case</h3>
                  <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">Environmental Law</span>
                </div>
                <p className="text-gray-700">
                  Represented community groups in litigation against industrial pollution, securing remediation and
                  compensation.
                </p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Button variant="outline" className="gap-2">
                View More Cases
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Section> */}

        {/* Contact Section */}
        <Section id="contact" bgColor="bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-700" />
                    <span>abirsijarlegalconsultants.bd@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-700" />
                    <span>+8801602063606</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <Link href="https://www.facebook.com/abir.ahamed.sijar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                      Facebook
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <Link href="https://www.linkedin.com/in/abir-ahamed-sijar-29baa9369/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                      LinkedIn
                    </Link>
                  </div>
               {/*<div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-gray-700" />
                    <div>
                      <div>123 Legal Avenue, Suite 500</div>
                      <div>Mumbai, Maharashtra 400001</div>
                    </div>
                  </div>*/}
                </div>
            {/* <div className="pt-4 border border-black">
                  <h4 className="text-lg font-medium mb-3">Office Hours</h4>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-gray-700">Sunday: By appointment only</p>
                </div> */}
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Send a Message</h3>
                <form 
                  action="https://api.web3forms.com/submit" 
                  method="POST"
                  className="space-y-4"
                >
                  {/* Replace YOUR_ACCESS_KEY_HERE with your actual Web3Forms access key */}
                  <input type="hidden" name="access_key" value="6b60fa30-d50f-4915-97cd-23b76c230bb7" />
                  <input type="hidden" name="subject" value="New Contact Form Submission from Legal Portfolio" />
                  <input type="hidden" name="from_name" value="Legal Portfolio Contact Form" />
                  {/* Redirect to a thank you page or back to homepage after submission */}
                  <input type="hidden" name="redirect" value="https://sijarabir.github.io/?success=true" />
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="custom_subject"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Subject of your message"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scale className="h-6 w-6" />
                <span className="text-xl font-semibold">Abir Ahamed Sijar</span>
              </div>
              <p className="text-gray-300 max-w-xs">
                Dedicated to providing exceptional legal counsel with integrity and expertise.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#about" className="text-gray-300 hover:text-white">
                  About
                </Link>
                <Link href="#education" className="text-gray-300 hover:text-white">
                  Education
                </Link>
                <Link href="#expertise" className="text-gray-300 hover:text-white">
                  Expertise
                </Link>
                {/* <Link href="#cases" className="text-gray-300 hover:text-white">
                  Cases
                </Link> */}
                <Link href="#contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </nav>
            </div>
            {/* <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  Disclaimer
                </Link>
              </nav>
            </div> */}
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 Abir Ahamed Sijar Legal Services. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/in/abir-ahamed-sijar-29baa9369/" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              {/* <Link href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link> */}
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </div>
  )
}
