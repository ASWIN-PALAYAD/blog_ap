import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Aswin</Link>
            <span>on</span>
            <Link>Web design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            corrupti est perferendis esse nulla eaque consequuntur quisquam
            voluptas hic, error autem laborum perspiciatis velit eos doloribus
            pariatur explicabo cumque aut.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src={"postImg.jpeg"} w={"600"} className={"rounded-2xl"} />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            ullam quia laborum dolor hic, optio necessitatibus sint, a illo
            quisquam doloremque ab in vitae neque omnis iste. Laborum, voluptate
            odio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            ullam quia laborum dolor hic, optio necessitatibus sint, a illo
            quisquam doloremque ab in vitae neque omnis iste. Laborum, voluptate
            odio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            voluptatibus possimus eaque sapiente tempore non perspiciatis
            incidunt dicta in voluptates suscipit similique dolorem odio, dolore
            accusamus ullam iste nihil saepe.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Culpa, ullam quia laborum dolor hic,
            optio necessitatibus sint, a illo quisquam doloremque ab in vitae
            neque omnis iste. Laborum, voluptate odio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            voluptatibus possimus eaque sapiente tempore non perspiciatis
            incidunt dicta in voluptates suscipit similique dolorem odio, dolore
            accusamus ullam iste nihil saepe.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Culpa, ullam quia laborum dolor hic,
            optio necessitatibus sint, a illo quisquam doloremque ab in vitae
            neque omnis iste. Laborum, voluptate odio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            ullam quia laborum dolor hic, optio necessitatibus sint, a illo
            quisquam doloremque ab in vitae neque omnis iste. Laborum, voluptate
            odio!Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            ullam quia laborum dolor hic, optio necessitatibus sint, a illo
            quisquam doloremque ab in vitae neque omnis iste. Laborum, voluptate
            odio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            voluptatibus possimus eaque sapiente tempore non perspiciatis
            incidunt dicta in voluptates suscipit similique dolorem odio, dolore
            accusamus ullam iste nihil saepe.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Culpa, ullam quia laborum dolor hic,
            optio necessitatibus sint, a illo quisquam doloremque ab in vitae
            neque omnis iste. Laborum, voluptate odio!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            voluptatibus possimus eaque sapiente tempore non perspiciatis
            incidunt dicta in voluptates suscipit similique dolorem odio, dolore
            accusamus ullam iste nihil saepe.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Culpa, ullam quia laborum dolor hic,
            optio necessitatibus sint, a illo quisquam doloremque ab in vitae
            neque omnis iste. Laborum, voluptate odio!
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src={"userImg.jpeg"}
                className={"w-12 h-12 rounded-full object-cover"}
                w={"48"}
                h={"48"}
              />
              <Link className="text-blue-800">Aswin s</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adi</p>
            <div className="flex gap-2">
              <Link>
                <Image src={"facebook.svg"} />
              </Link>
              <Link>
                <Image src={"instagram.svg"} />
              </Link>
            </div>
          </div>
          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to={"/"}>
              All
            </Link>
            <Link className="underline" to={"/"}>
              Web desing
            </Link>
            <Link className="underline" to={"/"}>
              Development
            </Link>
            <Link className="underline" to={"/"}>
              Database
            </Link>
            <Link className="underline" to={"/"}>
              Search Engines
            </Link>
            <Link className="underline" to={"/"}>
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default SinglePostPage;
