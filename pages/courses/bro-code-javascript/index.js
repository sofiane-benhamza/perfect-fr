import Head from "next/head";
import React, { useEffect, useState } from "react";
import { VideoPlayer } from "@/components/VideoPlayer";
import Header from "@/components/connected/Header";
import { Teacher } from "@/components/root/Teachers";

export default function Home() {
    const [video, setVideo] = useState("");
    const [names, setNames] = useState([]);
    const [videoJsOptions, setVideoJsOptions] = useState({
        controls: true,
        responsive: true,
        fluid: true,
        sources: [],
    });

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ADDR}stream_video/names/?`, {
                method: "GET",
            });
            const data = await response.json();
            console.log(data);
            setNames(data.videos);
            handleVideoChange(data.videos[0])
        } catch (e) {
            console.log(e);
        }
    };

    const handleVideoChange = (selectedVideo) => {
        console.log(selectedVideo)
        setVideo(selectedVideo);
        const updatedOptions = {
            ...videoJsOptions,
            sources: [
                {
                    src: `${process.env.NEXT_PUBLIC_BACKEND_ADDR}stream_video/videos/?video=${selectedVideo}`,
                    type: "video/mp4",
                },
            ],
        };
        setVideoJsOptions(updatedOptions);
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div>
            <Header />
            <br className="mb-2 bg-danger" />
            <main className="mt-5 pt-5 d-flex flex-row justify-content-between">
                <div className="col-lg-3 col-md-3 col-sm-1 mx-5">
                    <div className="text-light fw-bold">
                        <h3 className="my-2">HTML, CSS, Javascript for web developers</h3>
                        {names.map((videoName, index) => (
                            <p
                                key={index}
                                className={`my-3 p-3 teachers-hover cursor-pointer border border-light rounded ${video === videoName ? "selected-video" : ""}`}
                                value={videoName}
                                onClick={() => { handleVideoChange(videoName) }}
                            >
                                <i class="fa-solid fa-play mx-4"></i>  {videoName.replace(".mp4", "")}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-11 mx-5">
                    {video && <VideoPlayer key={video} options={videoJsOptions} />}
                    <h3 className="text-light my-3">{video.replace(".mp4", "")}</h3>
                    <hr className="border border-light" />
                    <div className="text-light d-flex flex-row">
                        <Teacher image="/images/team-2.jpg" name="Mr. Jones" designation="Computer science"/>
                        <h5 className="p-3 my-5">
                        Dr. Jones, now a vibrant 55-year-old computer science teacher, has led an inspiring and fulfilling life since his twenties. At 20,
                         he was a passionate computer science student, deeply immersed in coding and the burgeoning world of technology. 
                        His early years were marked by sleepless nights spent exploring the possibilities of programming and contributing to open-source projects.
                        </h5>
                    </div>

                </div>
            </main>
        </div>
    );
}
