import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Career() {
  return (
    <div className="pt-20 min-h-screen bg-brand-darker text-white">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black mb-6"
          >
            Join Our <span className="text-brand-yellow">Team</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Bantu kami memasyarakatkan catur di era digital.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            { title: "Video Editor", type: "Full-time", loc: "Jakarta / Remote" },
            { title: "Content Strategist", type: "Full-time", loc: "Jakarta" },
            { title: "Social Media Manager", type: "Part-time", loc: "Remote" },
          ].map((job, i) => (
            <div key={i} className="bg-brand-dark p-8 rounded-3xl border border-gray-800 hover:border-brand-yellow transition-all flex flex-col md:flex-row justify-between items-center gap-6 group">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-brand-yellow/10 rounded-2xl flex items-center justify-center">
                  <Briefcase className="text-brand-yellow w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.loc}</span>
                  </div>
                </div>
              </div>
              <button className="bg-gray-800 hover:bg-brand-yellow hover:text-black px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2">
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
