import React, { useState } from "react";
import Particles from "react-tsparticles";
import axios from "axios";

const HomeParticles = () => {
  const [particleSeed, setParticleSeed] = useState("");

  const saveAnimationSeed = (value) => {
    switch (value) {
      case "high":
        console.log("high");
        return 500;
      case "medium":
        console.log("medium");
        return 600;
      case "low":
        console.log("low");
        return 800;
      default:
        console.log("default-value");
        return 500;
    }
  };

  const particlesInit = async (main) => {
    try {
      const particleAnimationSeed = await axios.get(
        "http://35.173.248.116:3000/job-range"
      );
      console.log(particleAnimationSeed);
      if (particleAnimationSeed.data) {
        setParticleSeed(
          saveAnimationSeed(particleAnimationSeed.data?.animationSeed)
        );
      }
    } catch (err) {
      console.log("request failed: ", err);
    }
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <div className="particle-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#6A89A7",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "attract",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: particleSeed ? particleSeed : 500,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 2,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    </>
  );
};

export default HomeParticles;
