import { Mail, Phone, GraduationCap, Briefcase, Heart } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#093653] to-[#255c7e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-2 bg-blue-500/30 rounded-full text-sm mb-4">
                Senior Designer
              </div>
              <h1 className="text-5xl font-bold mb-4">Marc A. Raymond</h1>
              <p className="text-xl text-blue-100 mb-8">
                Design thinking, creative direction, and implementation for educational technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:mar227@columbia.edu"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-[#093653] rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  mar227@columbia.edu
                </a>
                <a
                  href="tel:+12128541866"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  (212) 854-1866
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl transform rotate-3"></div>
                <img
                  src="https://bpb-us-w2.wpmucdn.com/edblogs.columbia.edu/dist/8/1109/files/2016/08/Marc-1enkae8.png"
                  alt="Marc A. Raymond"
                  className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-[#255c7e]" />
              <h2 className="text-3xl font-bold text-gray-900">About</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                As Senior Designer, Marc provides design thinking, creative direction, and implementation for the CTL's educational technology projects and initiatives. His work can be seen in the web, print, identity, and video design of numerous Columbia platforms, campaigns, events, and services. He has been an integral creative contributor to Columbia projects since 2001.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In addition to designing educational technology products for instructors of higher education, Marc also has experience within the realm of K-12 education technology. He served as an after-school instructor at The Dalton School, where he taught user experience design principles, strategies, and tactics to high school STEM students.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Background */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-[#255c7e]" />
                <h2 className="text-2xl font-bold text-gray-900">Education</h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-[#255c7e] pl-4">
                  <h3 className="font-bold text-lg text-gray-900">M.S. in Strategic Communication</h3>
                  <p className="text-gray-600">Columbia University</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h3 className="font-bold text-lg text-gray-900">B.A. in Communication</h3>
                  <p className="text-gray-600">Rhode Island College</p>
                  <p className="text-sm text-gray-500">Major: Media Communication • Minor: Film Studies</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h3 className="font-bold text-lg text-gray-900">Manhattan Comedy School</h3>
                  <p className="text-gray-600">Graduate</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-[#255c7e]" />
                <h2 className="text-2xl font-bold text-gray-900">Beyond Work</h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Marc is a graduate of the Manhattan Comedy School and has performed both stand-up comedy and storytelling at prestigious venues including Comix, Caroline's on Broadway, and The Metropolitan Room.
                </p>
                <p>
                  When not brainstorming at the CTL, he can usually be found in one of the many libraries on campus studying Franco-American history or in his kitchen on the Upper West Side of Manhattan, cooking with his wife.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Originally from West Warwick, Rhode Island
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-4xl font-bold text-[#255c7e] mb-2">23+</div>
                <div className="text-gray-600">Years at Columbia</div>
                <div className="text-sm text-gray-500 mt-2">Since 2001</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-4xl font-bold text-[#255c7e] mb-2">Multiple</div>
                <div className="text-gray-600">Design Disciplines</div>
                <div className="text-sm text-gray-500 mt-2">Web, Print, Identity, Video</div>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-xl">
                <div className="text-4xl font-bold text-[#255c7e] mb-2">K-12 & HE</div>
                <div className="text-gray-600">Education Experience</div>
                <div className="text-sm text-gray-500 mt-2">Instructor & Designer</div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}