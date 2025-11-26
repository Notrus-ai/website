import Link from "next/link"

export default function Footer() {
  return (
    <footer className="container mx-auto ">
      <div className="p-4 md:p-16 bg-notrus-tangaroa text-white mb-8">
        <div className="flex flex-col gap-16 md:gap-40 md:flex-row">
          <div className="flex-1">
            <h3 className="text-xl font-bold pb-2">Notrus</h3>
            <p>Transform your customer experience with AI-powered agents that deliver exceptional support across all channels. Transform your customer experience with AI-powered agents that deliver exceptional support across all channels.</p>
            <button className="pt-8 pb-2">Get a demo</button>
          </div>
          <div className="flex-1 flex gap-4">
            <ul className="flex-1 group">
              <li><h4 className="font-bold pb-2">Product</h4></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">AI Chat</Link></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Voice Automation</Link></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Omnichannel</Link></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Analytics</Link></li>
            </ul>
            <ul className="flex-1 group">
              <li><h4 className="font-bold pb-2">Company</h4></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Case Studies</Link></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Security</Link></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Industries</Link></li>
              <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between pt-8 flex-wrap gap-2">
          <p className="order-2 md:order-1">Notrus © 2024. All rights reserved.</p>
          <ul className="flex gap-4 group order-1">
            <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Privacy Policy</Link></li>
            <li><Link href="#" className="group-hover:opacity-50 hover:opacity-100! transition-opacity">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
