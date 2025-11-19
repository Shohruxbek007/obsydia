import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="bg-black text-gray-500 py-20 border-t border-gray-900">
  <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
    <div class="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-20">
      
      
      <div class="col-span-2 md:col-span-1">
        <h2 class="text-2xl font-black text-white tracking-tighter">OBSYDIA</h2>
        <p class="mt-4 text-sm leading-relaxed max-w-xs">
          Footwear from the other side of the event horizon.
        </p>
        <p class="mt-6 text-xs uppercase tracking-widest">© 2025 OBSYDIA. All rights reserved.</p>
      </div>

      
      <div>
        <h3 class="text-xs font-medium uppercase tracking-widest text-white mb-4">Shop</h3>
        <ul class="space-y-3 text-sm">
          <li><a href="/collections" class="hover:text-white transition">New Drops</a></li>
          <li><a href="/01-low" class="hover:text-white transition">01 Low</a></li>
          <li><a href="/mono-boot" class="hover:text-white transition">Mono Boot</a></li>
          <li><a href="/apex" class="hover:text-white transition">Apex</a></li>
          <li><a href="/all" class="hover:text-white transition">All Products</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xs font-medium uppercase tracking-widest text-white mb-4">Company</h3>
        <ul class="space-y-3 text-sm">
          <li><a href="/about" class="hover:text-white transition">About</a></li>
          <li><a href="/stockists" class="hover:text-white transition">Stockists</a></li>
          <li><a href="/careers" class="hover:text-white transition">Careers</a></li>
          <li><a href="/press" class="hover:text-white transition">Press</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xs font-medium uppercase tracking-widest text-white mb-4">Support</h3>
        <ul class="space-y-3 text-sm">
          <li><a href="/contact" class="hover:text-white transition">Contact</a></li>
          <li><a href="/shipping" class="hover:text-white transition">Shipping & Returns</a></li>
          <li><a href="/size-guide" class="hover:text-white transition">Size Guide</a></li>
          <li><a href="/faq" class="hover:text-white transition">FAQ</a></li>
          <li><a href="/privacy" class="hover:text-white transition">Privacy Policy</a></li>
        </ul>
      </div>

      
      <div class="col-span-2 md:col-span-1">
        <h3 class="text-xs font-medium uppercase tracking-widest text-white mb-4">Enter the Void</h3>
        <p class="text-sm mb-4">First access to drops and zero spam.</p>
        <form class="flex flex-col sm:flex-row gap-3">
          <input type="email" placeholder="your@email.com" class="bg-gray-900 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-700"/>
          <button type="submit" class="bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-200 transition">Subscribe</button>
        </form>
        <p class="text-xs mt-6">By subscribing you agree to be consumed by darkness.</p>
      </div>
    </div>

    
    <div class="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest">
      <p>Made in the void.</p>
      <div class="flex gap-8 mt-4 md:mt-0">
        <a href="#" class="hover:text-white transition">Instagram</a>
        <a href="#" class="hover:text-white transition">X</a>
        <a href="#" class="hover:text-white transition">Discord</a>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
