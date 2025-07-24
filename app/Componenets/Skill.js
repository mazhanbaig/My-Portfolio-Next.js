import React from "react";

const Skill = () => {
  return (
    <>
      {/* <!-- Skills --> */}
      <section id="skill" class="bg-black text-white py-16 px-4">
        <h2 class="text-4xl font-extrabold text-center mb-12">My Skills</h2>
        <div class="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
          {/* <!-- HTML --> */}
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <p class="flex items-center gap-2 text-lg font-medium">
                <i class="fab fa-html5 text-orange-500 text-2xl"></i> HTML
              </p>
              <span class="text-sm text-gray-300">90%</span>
            </div>
            <div class="w-full bg-gray-700 h-3 rounded overflow-hidden">
              <div class="bg-gradient-to-r from-orange-400 to-red-500 h-3 rounded w-[90%]"></div>
            </div>
          </div>

          {/* <!-- CSS / Tailwind --> */}
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <p class="flex items-center gap-2 text-lg font-medium">
                <i class="fab fa-css3-alt text-blue-400 text-2xl"></i> CSS /
                Tailwind
              </p>
              <span class="text-sm text-gray-300">85%</span>
            </div>
            <div class="w-full bg-gray-700 h-3 rounded overflow-hidden">
              <div class="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded w-[85%]"></div>
            </div>
          </div>

          {/* <!-- JavaScript --> */}
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <p class="flex items-center gap-2 text-lg font-medium">
                <i class="fab fa-js text-yellow-300 text-2xl"></i> JavaScript
              </p>
              <span class="text-sm text-gray-300">70%</span>
            </div>
            <div class="w-full bg-gray-700 h-3 rounded overflow-hidden">
              <div class="bg-gradient-to-r from-yellow-300 to-yellow-600 h-3 rounded w-[70%]"></div>
            </div>
          </div>

          {/* <!-- Git & GitHub --> */}
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <p class="flex items-center gap-2 text-lg font-medium">
                <i class="fas fa-code text-green-400 text-2xl"></i> Git & GitHub
              </p>
              <span class="text-sm text-gray-300">60%</span>
            </div>
            <div class="w-full bg-gray-700 h-3 rounded overflow-hidden">
              <div class="bg-gradient-to-r from-green-300 to-emerald-500 h-3 rounded w-[60%]"></div>
            </div>
          </div>

          {/* <!-- React.js --> */}
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <p class="flex items-center gap-2 text-lg font-medium">
                <i class="fab fa-react text-cyan-400 text-2xl"></i> React.js
              </p>
              <span class="text-sm text-gray-300">60%</span>
            </div>
            <div class="w-full bg-gray-700 h-3 rounded overflow-hidden">
              <div class="bg-gradient-to-r from-cyan-400 to-sky-600 h-3 rounded w-[60%]"></div>
            </div>
          </div>

          {/* <!-- Next.js --> */}
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <p class="flex items-center gap-2 text-lg font-medium">
                <i class="fab fa-node-js text-green-300 text-2xl"></i> Next.js
              </p>
              <span class="text-sm text-gray-300">65%</span>
            </div>
            <div class="w-full bg-gray-700 h-3 rounded overflow-hidden">
              <div class="bg-gradient-to-r from-gray-300 to-gray-500 h-3 rounded w-[65%]"></div>
            </div>
          </div>
          {/* <!-- Node.js --> */}
<div className="space-y-2">
  <div className="flex items-center justify-between">
    <p className="flex items-center gap-2 text-lg font-medium">
      <i className="fab fa-node-js text-green-500 text-2xl"></i> Node.js
      <span className="text-sm">(Learning)</span>
    </p>
    <span className="text-sm text-gray-300">10%</span>
  </div>
  <div className="w-full bg-gray-700 h-3 rounded overflow-hidden">
    <div className="bg-gradient-to-r from-green-400 to-lime-500 h-3 rounded w-[10%]"></div>
  </div>
</div>

{/* <!-- Express.js --> */}
<div className="space-y-2">
  <div className="flex items-center justify-between">
    <p className="flex items-center gap-2 text-lg font-medium">
      <i className="fas fa-server text-gray-300 text-2xl"></i> Express.js
            <span className="text-sm">(Learning)</span>

    </p>
    <span className="text-sm text-gray-300">10%</span>
  </div>
  <div className="w-full bg-gray-700 h-3 rounded overflow-hidden">
    <div className="bg-gradient-to-r from-gray-400 to-gray-600 h-3 rounded w-[10%]"></div>
  </div>
</div>

{/* <!-- MongoDB --> */}
<div className="space-y-2">
  <div className="flex items-center justify-between">
    <p className="flex items-center gap-2 text-lg font-medium">
      <i className="fas fa-database text-green-400 text-2xl"></i> MongoDB
            <span className="text-sm">(Learning)</span>

    </p>
    <span className="text-sm text-gray-300">10%</span>
  </div>
  <div className="w-full bg-gray-700 h-3 rounded overflow-hidden">
    <div className="bg-gradient-to-r from-green-300 to-emerald-600 h-3 rounded w-[10%]"></div>
  </div>
</div>

{/* <!-- React Native --> */}
<div className="space-y-2">
  <div className="flex items-center justify-between">
    <p className="flex items-center gap-2 text-lg font-medium">
      <i className="fab fa-react text-blue-300 text-2xl"></i> React Native
            <span className="text-sm">(Learning)</span>

    </p>
    <span className="text-sm text-gray-300">10%</span>
  </div>
  <div className="w-full bg-gray-700 h-3 rounded overflow-hidden">
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-3 rounded w-[10%]"></div>
  </div>
</div>

        </div>
      </section>
    </>
  );
};

export default Skill;
