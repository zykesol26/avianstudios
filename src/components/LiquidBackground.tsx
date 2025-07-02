const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Main liquid blobs */}
      <div 
        className="liquid-blob animate-liquid w-96 h-96"
        style={{
          top: '10%',
          left: '10%',
          animationDelay: '0s'
        }}
      />
      <div 
        className="liquid-blob animate-liquid w-80 h-80"
        style={{
          top: '60%',
          right: '15%',
          animationDelay: '5s'
        }}
      />
      <div 
        className="liquid-blob animate-liquid w-64 h-64"
        style={{
          bottom: '20%',
          left: '40%',
          animationDelay: '10s'
        }}
      />
      
      {/* Smaller ambient blobs */}
      <div 
        className="liquid-blob animate-liquid w-32 h-32 opacity-50"
        style={{
          top: '30%',
          right: '40%',
          animationDelay: '3s'
        }}
      />
      <div 
        className="liquid-blob animate-liquid w-48 h-48 opacity-40"
        style={{
          bottom: '10%',
          right: '10%',
          animationDelay: '7s'
        }}
      />
    </div>
  );
};

export default LiquidBackground;