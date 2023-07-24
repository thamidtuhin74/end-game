import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import imeage1 from "../../../../src/assets/images/download (2).jpg";
import imeage2 from "../../../../src/assets/images/download (3).jpg";
import imeage3 from "../../../../src/assets/images/download (4).jpg";
import imeage4 from "../../../../src/assets/images/download.jpg";
import imeage5 from "../../../../src/assets/images/istockphoto-1371896330-170667a.webp";
import imeage6 from "../../../../src/assets/images/pexels-pixabay-267885.jpg";

const Gallery = () => {
  return (
    <div>
      <h1 className="text-center font-bold md:text-2xl lg:text-2xl md:mt-12 lg:mt-16 text-green-950 mt-8">
        College graduation image gallery
      </h1>
      <div className="mt-8 md:px-4 lg:px-4">
        <Tabs>
          <TabList>
            <Tab>
              <h1 className="text-xl font-bold text-violet-500 hover:text-violet-800">
                University of ABC
              </h1>
            </Tab>
            <Tab>
              <h1 className="text-xl font-bold text-violet-500 hover:text-violet-800">
                XYZ College
              </h1>
            </Tab>
            <Tab>
              <h1 className="text-xl font-bold text-violet-500 hover:text-violet-800">
                ABC Institute of Technology
              </h1>
            </Tab>
            <Tab>
              <h1 className="text-xl font-bold text-violet-500 hover:text-violet-800">
                DEF Business School
              </h1>
            </Tab>
            <Tab>
              <h1 className="text-xl font-bold text-violet-500 hover:text-violet-800">
                GHI Medical College
              </h1>
            </Tab>
            <Tab>
              <h1 className="text-xl font-bold text-violet-500 hover:text-violet-800">
                JKL Art Academy
              </h1>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage1}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      data-aos="fade-up"
                      src={imeage6}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage4}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage2}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage5}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage4}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage1}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage2}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage5}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage4}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage5}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage6}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage5}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage1}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage6}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage3}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage1}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
              <div className="">
                <div className="card w-80 bg-base-100 border-solid border-2 border-indigo-600 mt-10 shadow-2xl">
                  <figure className="px-10 pt-10">
                    <img
                      src={imeage6}
                      alt="Shoes"
                      className="rounded-xl h-72"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;
