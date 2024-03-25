
import Image from 'next/image'
import Colors from '../../components/Colors';
import Links from '../../components/Links';
import { useEffect, useState } from 'react';

export default async function Home() {


  return (
    <main className="items-center p-5 min-w-full min-h-screen bg-gradient-to-tr from-orange-400 to-slate-500 pt-20">
      <div className="grid p-3 mx-auto text-center text-white rounded-2xl border border-r-8 shadow-md gmy-5 border-slate-500 bg-slate-600 md:w-5/6">
      <p className="pb-4 text-2xl font-bold text-orange-200 heading">Forms and Documents</p>
        <div className='md:grid md:grid-cols-2'>
        <div>
        <ul className="text-left text-orange-300 md:text-center">
          <p className='font-bold'>Drug Court/DOSA Participant Forms</p>
          <li><a href="https://clark.wa.gov/media/document/56217">Drug Court team contact list</a></li>

          <li><a href="https://clark.wa.gov/media/document/56218">DOSA team contact list</a></li>
          <li><a href="https://clark.wa.gov/media/document/56220">Application to phase up to 2 Drug Court</a></li>
          <li><a href="https://clark.wa.gov/media/document/56221">Application to phase up to 3 Drug Court</a></li>
          <li><a href="https://clark.wa.gov/media/document/56222">Application to phase up to 4 Drug Court</a></li>
          <li><a href="https://clark.wa.gov/media/document/110461">Application to graduate Drug Court</a></li>
          <li><a href="https://clark.wa.gov/media/document/56223">Community service log with sites</a></li>
          <li><a href="https://clark.wa.gov/media/document/56224">Needs assessment</a></li>
          <li><a href="https://clark.wa.gov/media/document/56225">Job search form</a></li>
          <li><a href="https://clark.wa.gov/media/document/106901">Health Care form</a></li>
          <li><a href="https://clark.wa.gov/media/document/113391">Request form</a></li>
          <li><a href="https://clark.wa.gov/media/document/106906">Life Story Template</a></li>
          <li><a href="https://clark.wa.gov/media/document/135166">Recovery support documentation</a></li>
          <li><a href="https://clark.wa.gov/media/document/78211">Recovery Passport</a></li>
          <li><a href="https://clark.wa.gov/media/document/152841">Personal Budget form - excel version</a></li>
          <li><a href="https://clark.wa.gov/media/document/78361">Personal Budget form - pdf fillable version</a></li>
          <li><a href="https://clark.wa.gov/media/document/56228">Drug Court/DOSA Exit Interview</a></li></ul></div>
          <ul className='text-left text-orange-300 md:text-center'>
          <p className='font-bold'>Family Treatment Court Participant Forms</p>
          <li><a href="https://clark.wa.gov/media/document/117136">FTC team contact list </a></li>
          <li><a href="https://clark.wa.gov/media/document/56230">Introduction to Family Treatment Court</a></li>
          <li><a href="https://clark.wa.gov/media/document/56223">Community service log with sites</a></li>
          <li><a href="https://clark.wa.gov/media/document/56232">Needs assessment</a></li>
          <li><a href="https://clark.wa.gov/media/document/56225">Job search form</a></li>
          <li><a href="https://clark.wa.gov/media/document/106901">Health Care form</a></li>
          <li><a href="https://clark.wa.gov/media/document/106906">Life Story Template</a></li>
          <li><a href="https://clark.wa.gov/media/document/56235">Recovery Wellness Plan</a></li>
          <li><a href="https://clark.wa.gov/media/document/56236">Family Case Plan</a></li>
          <li><a href="https://clark.wa.gov/media/document/103271">Children - under age 5 form</a></li>
          <li><a href="https://clark.wa.gov/media/document/103276">Children - over age 5 form</a></li>
          <li><a href="https://clark.wa.gov/media/document/56227">Support group verification</a></li>
          <li><a href="https://clark.wa.gov/media/document/118456">Application to Step up to 2 - FTC</a></li>
          <li><a href="https://clark.wa.gov/media/document/117446">Application to Step up to 3 - FTC</a></li>
          <li><a href="https://clark.wa.gov/media/document/117586">Application to Step up to 4 - FTC</a></li>
          <li><a href="https://clark.wa.gov/media/document/117601">Application to Graduate - FTC</a></li>

        </ul>


        </div>
      </div>

    </main>
  );
}