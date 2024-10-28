import {
  QuestionMarkCircleIcon,
  CircleStackIcon,
  EyeIcon,
} from "@heroicons/react/20/solid";
import zenStones from "./assets/zenStones.png";
import IChingGame from "./IChingGame";
import Footer from "./Footer";
import Quotes from "./Quotes";

function App() {
  return (
    <div>
      <div className="relative">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end mb-0 bg-stone-100">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 bg-stone-100 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0 p-0 m-0 overflow-hidden">
              <img
                alt=""
                src={zenStones}
                className="absolute inset-0 w-full bg-stone-100 object-cover object-[40%_20%]  h-[120%] block"
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <p className="text-4xl font-semibold leading-7 text-tealCustom font-serif">
                I Ching
              </p>
              <h1 className="mt-8 text-3xl tracking-tight text-gray-900 sm:text-4xl font-medium italic font-lora">
                Book of Changes
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700 italic">
                The I Ching is a reminder that life is in motion. Balance isn’t
                about controlling the tides—it’s about riding them, knowing when
                to move and when to wait. Toss the coins, and let the wisdom of
                Yin and Yang show you where your potential lies.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                <p>
                  The I Ching, or Book of Changes, is an ancient Chinese tool
                  for divination based on the idea that the universe is in
                  constant motion, a dance between two fundamental forces: Yin
                  and Yang. Yin is soft, receptive, and hidden potential. Yang
                  is sharp, direct, and active energy. Every situation—whether
                  it’s love, work, or personal growth—contains both of these
                  energies. The key is finding their balance. Will you lean into
                  action or pause and let things unfold? The I Ching helps you
                  feel that out. It’s a guide to the now—offering clarity about
                  what could happen if you align yourself with the natural flow
                  of things.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 font-lora">
                  How to toss the coins and consult the I Ching:
                </h2>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <QuestionMarkCircleIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-tealCustom"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Form your question.
                      </strong>{" "}
                      The I Ching doesn’t answer with “yes” or “no.” It explores
                      possibilities and potentials—like Yin and Yang shifting
                      through every moment. Think of a question that lets you
                      reflect: “What needs my attention right now?” or “Should I
                      push forward, or wait for things to reveal themselves?”
                      Keep it open and let your curiosity guide you.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CircleStackIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-tealCustom"
                    />

                    <span>
                      <strong className="font-semibold text-gray-900">
                        Toss the coins—six times.
                      </strong>{" "}
                      Each toss reveals either a solid line (Yang) or a broken
                      line (Yin). Click{" "}
                      <span className=" text-tealCustom font-medium">
                        Toss Coins
                      </span>{" "}
                      six times, working from the bottom to the top, until
                      you’ve built a hexagram—your snapshot of the situation’s
                      Yin-Yang balance. Some lines may call for bold action;
                      others may tell you to stay still and receive.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <EyeIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 flex-none text-tealCustom"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Find your hexagram’s meaning.
                      </strong>{" "}
                      Click on your hexagram. It’s not a prophecy, but a map of
                      potentials guiding you toward harmony with the flow of
                      change. Sometimes you’ll need more Yang: decisiveness,
                      action, clarity. Other times, Yin is the answer: patience,
                      rest, allowing things to unfold. Each line is an
                      invitation to notice where these forces are at play in
                      your life.
                    </span>
                  </li>
                </ul>

                {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 font-lora">
                Embrace the Flow
              </h2> */}
                {/* <p className="mt-6">
                What feels blocked today might open tomorrow; what seems urgent
                may resolve by itself. Every moment holds shifting
                potentials—some to act on, others to simply observe. Wisdom
                comes from knowing which is which.
              </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <IChingGame />
      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
