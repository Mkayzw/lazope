import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation - Updated for mobile responsiveness */}
      <header className="w-full py-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between bg-white border-b border-gray-100">
        <div className="flex items-center mb-4 md:mb-0">
          <Image 
            src="/assets/LogowithText.jpg" 
            alt="Lazope Construction Logo" 
            width={180} 
            height={60}
            className="object-contain"
          />
        </div>
        <nav className="flex space-x-6 md:space-x-12 my-3 md:my-0">
          <Link href="/" className="text-[#073379] font-medium text-base hover:text-blue-600">Home</Link>
          <Link href="/projects" className="text-[#073379] font-medium text-base hover:text-blue-600">Projects</Link>
          <Link href="/contact" className="text-[#073379] font-medium text-base hover:text-blue-600">Contact</Link>
        </nav>
        <div className="hidden md:block w-[180px]">
          {/* Empty div to balance the layout on desktop */}
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="w-full py-10 md:py-16 bg-gray-200 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#073379] mb-4">Expert Construction and Renovation Services</h1>
          <p className="text-lg text-gray-700 mb-8">We bring your construction dreams to life, both big and small.</p>
          <Link href="/projects" className="btn-primary">
            View Projects
          </Link>
        </div>
      </section>
      
      {/* Mission and Promises Section */}
      <section className="w-full py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Our Promises */}
          <div className="flex flex-col">
            <div className="relative h-64 rounded-lg overflow-hidden mb-6">
              <Image
                src="/assets/constructionrig.jpg"
                alt="Construction Site"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold heading-primary mb-4 text-center">Our Promises</h2>
            <ul className="space-y-4">
              <li>
                <p className="heading-primary font-semibold">Quality First</p>
                <p className="text-gray-700">We deliver durable, high-standard workmanship on every project, big or small.</p>
              </li>
              <li>
                <p className="heading-primary font-semibold">On-Time Delivery</p>
                <p className="text-gray-700">We respect your time and strive to meet all project deadlines without compromising quality.</p>
              </li>
              <li>
                <p className="heading-primary font-semibold">Transparent Communication</p>
                <p className="text-gray-700">We keep our clients informed at every stage, building trust through honesty and clarity.</p>
              </li>
              <li>
                <p className="heading-primary font-semibold">Client Satisfaction</p>
                <p className="text-gray-700">We&apos;re not done until you&apos;re satisfied — your vision is our priority.</p>
              </li>
            </ul>
          </div>
          
          {/* Our Values */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold heading-primary mb-4 text-center">Our Values</h2>
            <p className="text-gray-700 text-center mb-6">
              To deliver high-quality, innovative, and sustainable construction solutions that meet the needs of our clients while upholding the highest standards of integrity, professionalism, and reliability in every project we undertake, big and small.
            </p>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/assets/helmet.jpg"
                alt="Construction Helmet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full py-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
          <p className="mt-4 text-gray-600">
            Request a quote on any prospective projects
          </p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="w-full py-8 px-4 md:px-8 bg-[#073379] text-white mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Reach us on:</h3>
            <p className="mb-2 text-center md:text-left">Our whats app business line: <span className="font-semibold">+263 78 608 9168</span></p>
            <p className="mb-2 text-center md:text-left">Email: <span className="font-semibold">Lazopeconstruction@gmail.com</span></p>
            <p className="mb-2 text-center md:text-left">Open Hours: Mon – Fri: 8:00am – 05:00pm</p>
            <p className="text-center md:text-left">Saturdays: 9:00am – 1:00pm</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-semibold mb-4 text-center md:text-right">About</h3>
            <p className="text-center md:text-right max-w-md">
              We are an up and coming construction company in Zimbabwe that provides basic construction/renovation, electrical, plumbing, and mechanical engineering services.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image 
              src="/assets/LogowithText.jpg" 
              alt="Lazope Construction Logo" 
              width={80} 
              height={30}
              className="object-contain bg-white p-1 rounded"
            />
          </div>
          <p className="text-sm">© 2025. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
