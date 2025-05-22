
export default function ManifestoSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-7xl lg:text-9xl fashion-header mb-16 tracking-tighter leading-none">
            DEFINE BOLDNESS<br/>EMBRACE ELEGANCE
          </h2>
          
          <div className="relative mt-12">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1024" 
              alt="Fashion model in elegant outfit"
              className="w-full h-[60vh] object-cover object-center"
            />
            <div className="absolute -bottom-4 -right-4 bg-black p-3">
              <span className="fashion-subheader text-xs">SIGNATURE COLLECTION</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background design elements */}
      <div className="absolute top-1/2 left-20 transform -translate-y-1/2">
        <div className="text-foreground/5 font-display text-[200px]">*</div>
      </div>
      <div className="absolute bottom-20 right-20">
        <div className="text-foreground/5 font-display text-[100px]">*</div>
      </div>
    </section>
  );
}
