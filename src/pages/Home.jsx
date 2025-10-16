import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl font-bold">Dawit Ayele Woldesenbet</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Electromechanical Engineer & Certified Data Analyst. Skilled in Python, JavaScript, web development, and machine learning.
          </p>
          <div className="mt-4 flex gap-3">
            <Link to="/projects" className="px-4 py-2 bg-teal-500 text-white rounded">See Projects</Link>
            <Link to="/tasks" className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded">Tasks Demo</Link>
          </div>
        </div>
        <div>
          <Card>
            <h3 className="font-semibold">Contact</h3>
            <p className="mt-2">Phone: +251936140610</p>
            <p>Email: dawitayelewoldesenbet@gmail.com</p>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">Quick Links</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Card>
            <h4 className="font-semibold">MoonLight-Solar-EDA</h4>
            <p>Python, Pandas, Matplotlib — Solar energy EDA and dashboards.</p>
          </Card>
          <Card>
            <h4 className="font-semibold">Doge-Coin Prediction</h4>
            <p>LSTM & GRU experiments for crypto prediction in Python.</p>
          </Card>
        </div>
      </section>
    </div>
  );
}
