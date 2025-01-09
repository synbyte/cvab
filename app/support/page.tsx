export default async function Home() {
  return (
    <main className="items-center p-5 min-w-full min-h-screen  pt-20">
      <div className="p-3 mx-auto text-center rounded-2xl shadow-md shadow-black bg-cyan-50 md:w-5/6">
        <p className="pb-4 text-2xl font-bold text-cyan-800 heading">Support</p>
        <div className="md:grid md:grid-cols-2">
          <div className="flex flex-col">
            <ul className="text-left text-cyan-700 md:text-center">
              <a href="https://cvabonline.com">
                <p className="font-bold text-cyan-500 underline">Pier 360</p>
              </a>
              <p className="text-xs">West - (360)397-8050</p>
              <p className="text-xs">East - (360)253-4036</p>
              <li>
                <a href="https://www.cvabonline.org/s/Pier360-West-January-2025-Final.pdf">
                  West center calendar
                </a>
              </li>
              <li>
                <a href="https://www.cvabonline.org/s/Pier360-East-January-2025-Final.pdf">
                  East center calendar
                </a>
              </li>
              <li>
                <a href="https://www.cvabonline.org/services">
                  Information on services provided
                </a>
              </li>
              <li>
                <a href="https://www.cvabonline.org/training">
                  Pier 360 academy
                </a>
              </li>
              <li>
                <a href="https://www.cvabonline.org/warmline">Warm Line</a>
              </li>
            </ul>

            <ul className="text-left text-cyan-700 md:text-center">
              <a href="https://www.recoverycafecc.org/">
                <p className="font-bold text-cyan-500 underline">Recovery Cafe</p>
              </a>
              <p className="text-xs">(360)984-6163</p>
              <li>
                <a href="https://www.recoverycafecc.org/about-3-1">Calendar</a>
              </li>
              <li>
                <a href="https://www.recoverycafecc.org/recovery-navigator-program">
                  Recovery Navigator Program
                </a>
              </li>
              <li><a href="https://www.recoverycafecc.org/vha-program">VHA Program</a></li>
              <li><a href="https://www.recoverycafecc.org/recovery-coach-program">Recovery Coach Program</a></li>
            </ul>
            <ul className="text-left text-cyan-700 md:text-center">
              <a href="https://couvecollective.org/">
                <p className="font-bold text-cyan-500 underline">Couve Collective</p>
              </a>
              <p className="text-xs">(564)208-4842</p>
              <li>
                <a href="https://couvecollective.org/events/">
                  Calendar
                </a>
              </li>
              <li><a href="https://couvecollective.org/saga/">SAGA</a></li>
              <li><a href="https://couvecollective.org/recovery/">Membership</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
           
            <ul className="text-left text-cyan-700 md:text-center">
              <a href="https://www.restoredandrevived.com/">
                <p className="font-bold text-cyan-500 underline">Restored & Revived</p>
              </a>
              <p className="text-xs">(541)350-2098</p>
              <li>
                <a href="https://www.restoredandrevived.com/events">
                  Calendar
                </a>
              </li>
              <li><a href="https://www.restoredandrevived.com/programs-and-services">Programs and Services</a></li>
            </ul>
            <ul className="text-left text-cyan-700 md:text-center">
              <a href="https://www.vancouveraa.org/">
                <p className="font-bold text-cyan-500 underline">AA</p>
              </a>
              <p className="text-xs">(360)314-4619</p>
              <li>
                <a href="https://www.vancouveraa.org/events/">
                  Calendar
                </a>
              </li>
              <li><a href="https://www.vancouveraa.org/meetings/">Meetings</a></li>
              <li><a href="https://www.vancouveraa.org/links/">Links & Resources</a></li>
              <li><a href="https://www.restoredandrevived.com/programs-and-services">Programs and Services</a></li>
            </ul>
            <ul className="text-left text-cyan-700 md:text-center">
              <a href="https://swanaonline.org/">
                <p className="font-bold text-cyan-500 underline">NA</p>
              </a>
              <p className="text-xs">(360)703-0990</p>
              <li>
                <a href="https://swanaonline.org/events/">
                  Calendar
                </a>
              </li>
              <li><a href="https://swanaonline.org/meetings/">Meetings</a></li>
            </ul>
            <ul className="text-left text-cyan-700 md:text-center">
              <a href="https://smartrecovery.org/">
                <p className="font-bold text-cyan-500 underline">Smart Recovery</p>
              </a>
              <p className="text-xs">(440)951-5357</p>
              <li>
                <a href="https://swanaonline.org/events/">
                  Calendar
                </a>
              </li>
              <li><a href="https://meetings.smartrecovery.org/meetings/?coordinates=50&location=Vancouver%2C+WA%2C+USA">Meetings</a></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
