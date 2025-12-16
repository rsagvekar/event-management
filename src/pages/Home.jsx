import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Img0 from "../assets/img0.jpg";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import DevendraFadanvis from "../assets/devendraFadanvis.jpg";
import AshwiniBhide from "../assets/ashwiniBhide.jpg";
import BhushanGagrani from "../assets/bhushanGagrani.jpg";
import DeepakKaranjikar from "../assets/deepakKaranjikar.jpg";
import AnayJoglekar from "../assets/anayJoglekar.jpg";
import AmeetSatam from "../assets/ameetSatam.jpg";
import BhauTorsekar from "../assets/bhauTorsekar.jpg";
import ManojJoshi from "../assets/manojJoshi.jpg";
import NanaPatekar from "../assets/nanaPatekar.jpg";
import UdayNirgudkar from "../assets/udayNirgudkar.jpg";
import PrabhakarSuryavanshi from "../assets/prabhakarSuryavanshi.jpg";
import SharadPonkshe from "../assets/sharadPonkshe.jpg";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSessionIndex, setCurrentSessionIndex] = useState(0);

  // Hero section background images
  const heroImages = [Img0, Img1, Img2, Img3, Img4];

  // Sessions data matching the image
  const sessions = [
    {
      id: 1,
      title: "सत्र पहिले",
      subtitle: "विजन मुंबई - २०३०",
      time: "वेळ - सकाळी १० वाजता",
      icon: "🎯",
      panelists: [
        {
          name: "मा. मुख्यमंत्री देवेंद्रजी फडणवीस",
          role: "यांच्यासह चर्चा",
          image: DevendraFadanvis,
        },
      ],
      host: [
        {
          name: "भाऊ तोरसेकर",
          role: "",
          detail: "",
          image: BhauTorsekar,
        },
        {
          name: "उदय निर्गुडकर",
          role: "",
          image: UdayNirgudkar,
        },
        {
          name: "प्रभाकर सूर्यवंशी",
          role: "",
          image: PrabhakarSuryavanshi,
        },
      ],
    },
    {
      id: 2,
      title: "सत्र दुसरे",
      subtitle: "मुंबई - जगाची आर्थिक राजधानी",
      time: "वेळ - सकाळी ११ वाजता",
      icon: "💼",
      panelists: [
        {
          name: "अश्विनी भिडे",
          role: "प्रधान सचिव (मुख्यमंत्री, महाराष्ट्र)",
          image: AshwiniBhide,
        },
        {
          name: "भूषण गगराणी",
          role: "आयुक्त, मुंबई महानगरपालिका",
          image: BhushanGagrani,
        },
        {
          name: "दीपक करुंजीकर",
          role: "लेखक",
          image: DeepakKaranjikar,
        },
        {
          name: "अनय जोगलेकर",
          role: "यूट्युबर",
          image: AnayJoglekar,
        },
      ],
      host: [
        {
          name: "उदय निर्गुडकर",
          role: "",
          image: UdayNirgudkar,
        },
      ],
    },
    {
      id: 3,
      title: "सत्र तिसरे",
      subtitle: "मुंबई एक यशोगाथा अथवा ब्रॅंड मुंबई",
      time: "वेळ - दुपारी २ वाजता",
      icon: "🏙️",
      panelists: [
        {
          name: "आमदार अमित साटाम",
          role: "भाजप मुंबई अध्यक्ष",
          image: AmeetSatam,
        },
        {
          name: "भाऊ तोरसेकर",
          role: "ज्येष्ठ  पत्रकार",
          image: BhauTorsekar,
        },
        {
          name: "मनोज जोशी",
          role: "अभिनेता",
          image: ManojJoshi,
        },
      ],
      host: [
        {
          name: "शरद पोंक्षे",
          role: "",
          image: SharadPonkshe,
        },
      ],
    },
    {
      id: 4,
      title: "सत्र चौथे",
      subtitle: "चतुरस्त्र अभिनेते नाना पाटेकर यांची मुलाखत",
      time: "वेळ - दुपारी ३:३० वाजता",
      icon: "🎬",
      panelists: [
        {
          name: "नाना पाटेकर",
          role: "सिने अभिनेता",
          image: NanaPatekar,
        },
      ],
      host: [
        {
          name: "भाऊ तोरसेकर",
          role: "",
          image: BhauTorsekar,
        },
      ],
    },
  ];

  // Auto-slide hero images every 5 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [heroImages.length]);

  // Auto-slide sessions every 5 seconds
  useEffect(() => {
    const sessionInterval = setInterval(() => {
      setCurrentSessionIndex((prev) => (prev + 1) % sessions.length);
    }, 5000);

    return () => clearInterval(sessionInterval);
  }, [sessions.length]);

  const currentSession = sessions[currentSessionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {/* Hero Section with Sliding Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
                backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.7), rgba(218, 165, 32, 0.8)), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-white px-4">
          <div className="max-w-7xl mx-auto w-full text-center py-8">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 tracking-tight px-2"
              style={{
                fontFamily: "'Poppins', sans-serif",
                textShadow:
                  "3px 3px 6px rgba(0,0,0,0.5), 0 0 30px rgba(255,165,0,0.6)",
                background: "linear-gradient(45deg, #FFD700, #FFA500, #FF8C00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.8))",
                lineHeight: "1.6",
              }}
            >
              द मुंबई डायलॉग्ज!
            </h1>
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-3 font-bold px-4"
              style={{
                fontFamily: "'Mukta', sans-serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                lineHeight: "1.3",
              }}
            >
              रोडमॅप, स्वप्नवत मुंबईचा..!
            </p>
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-4 sm:px-6 md:px-8 py-2 sm:py-3 inline-block rounded-full mb-4 transform hover:scale-105 transition-transform mx-4">
              <p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brown-900"
                style={{
                  lineHeight: "1.4",
                }}
              >
                at Sahara Star, Vile Parle
              </p>
            </div>
            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 md:mb-10 font-black px-4"
              style={{
                fontFamily: "'Poppins', sans-serif",
                textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
                lineHeight: "1.3",
              }}
            >
              25<sup className="text-xl sm:text-2xl md:text-3xl">TH</sup>{" "}
              December 2025
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 max-w-3xl mx-auto">
              <Link
                to="/register"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-black py-3 sm:py-4 px-8 sm:px-12 rounded-full text-lg sm:text-xl transition duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:scale-110 hover:-translate-y-1 w-full sm:w-auto"
                style={{ fontFamily: "'Mukta', sans-serif" }}
              >
                आता नोंदणी करा! →
              </Link>
              <a
                href="#sessions"
                className="bg-white/20 backdrop-blur-md border-3 sm:border-4 border-white hover:bg-white hover:text-orange-600 text-white font-black py-3 sm:py-4 px-8 sm:px-12 rounded-full text-lg sm:text-xl transition duration-300 shadow-2xl transform hover:scale-110 hover:-translate-y-1 w-full sm:w-auto"
                style={{ fontFamily: "'Mukta', sans-serif" }}
              >
                सत्रे पहा ↓
              </a>
            </div>

            {/* Image Indicators */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "w-8 sm:w-12 bg-yellow-400"
                      : "w-2 sm:w-3 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sessions Overview Section */}
      <section
        id="sessions"
        className="py-20 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-5xl md:text-6xl font-black text-center mb-16 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
            style={{ fontFamily: "'Poppins', sans-serif", lineHeight: "1.6" }}
          >
            कार्यक्रमाचे सत्र
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sessions.map((session, index) => (
              <div
                key={session.id}
                onClick={() => setCurrentSessionIndex(index)}
                className={`relative cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  index === currentSessionIndex
                    ? "ring-4 ring-orange-500 shadow-2xl shadow-orange-500/50 scale-105"
                    : "hover:shadow-xl"
                }`}
                style={{
                  background:
                    index === currentSessionIndex
                      ? "linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)"
                      : "linear-gradient(135deg, #8B4513 0%, #D2691E 100%)",
                  borderRadius: "20px",
                  padding: "2rem",
                  minHeight: "280px",
                }}
              >
                <div className="text-6xl mb-4 animate-bounce">
                  {session.icon}
                </div>
                <h3
                  className="text-2xl font-black mb-3 text-white"
                  style={{ fontFamily: "'Mukta', sans-serif" }}
                >
                  {session.title}
                </h3>
                <p
                  className="text-yellow-100 font-bold mb-2 text-lg"
                  style={{ fontFamily: "'Mukta', sans-serif" }}
                >
                  {session.subtitle}
                </p>
                <p
                  className="text-yellow-50 text-sm"
                  style={{ fontFamily: "'Mukta', sans-serif" }}
                >
                  {session.time}
                </p>
              </div>
            ))}
          </div>

          {/* Session Indicator Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {sessions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSessionIndex(index)}
                className={`h-4 rounded-full transition-all duration-300 ${
                  index === currentSessionIndex
                    ? "w-16 bg-gradient-to-r from-orange-500 to-red-500"
                    : "w-4 bg-orange-300 hover:bg-orange-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Current Session Panelists Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full mb-6 shadow-lg">
              <h2
                className="text-3xl font-black"
                style={{ fontFamily: "'Mukta', sans-serif" }}
              >
                {currentSession.title}
              </h2>
            </div>
            <p
              className="text-2xl font-bold text-orange-800"
              style={{ fontFamily: "'Mukta', sans-serif" }}
            >
              {currentSession.subtitle}
            </p>
          </div>

          <h3
            className="text-4xl font-black text-center mb-12 text-orange-700"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            पॅनेलिस्ट
          </h3>

          <div
            className={`grid grid-cols-1 ${
              currentSession.panelists.length === 1
                ? "md:grid-cols-1 max-w-md mx-auto"
                : currentSession.panelists.length === 2
                ? "md:grid-cols-2 max-w-3xl mx-auto"
                : "md:grid-cols-2 lg:grid-cols-4"
            } gap-8`}
          >
            {currentSession.panelists.map((panelist, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={panelist.image}
                    alt={panelist.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50">
                  <h4
                    className="text-xl font-black mb-2 text-brown-900"
                    style={{ fontFamily: "'Mukta', sans-serif" }}
                  >
                    {panelist.name}
                  </h4>
                  <p
                    className="text-orange-700 font-semibold"
                    style={{ fontFamily: "'Mukta', sans-serif" }}
                  >
                    {panelist.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Session Host Section - FIXED TO HANDLE ARRAY */}
      <section className="py-20 bg-gradient-to-br from-brown-50 via-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3
            className="text-4xl font-black text-center mb-12 text-orange-700"
            style={{ fontFamily: "'Poppins', sans-serif", lineHeight: "1.6" }}
          >
            सत्र संचालक
          </h3>

          <div
            className={`grid grid-cols-1 ${
              currentSession.host.length === 1
                ? "md:grid-cols-1 max-w-2xl mx-auto"
                : currentSession.host.length === 2
                ? "md:grid-cols-2 max-w-5xl mx-auto"
                : "md:grid-cols-2 lg:grid-cols-3"
            } gap-8`}
          >
            {currentSession.host.map((host, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500"
                style={{
                  animation: `fadeIn 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={host.image}
                    alt={host.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-4xl mb-2">🎙️</div>
                  </div>
                </div>
                <div className="p-6 text-white">
                  <h4
                    className="text-2xl font-black mb-2"
                    style={{
                      fontFamily: "'Mukta', sans-serif",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    {host.name}
                  </h4>
                  <p
                    className="text-lg font-bold text-yellow-100 mb-1"
                    style={{ fontFamily: "'Mukta', sans-serif" }}
                  >
                    {host.role}
                  </p>
                  {host.detail && (
                    <p
                      className="text-base text-yellow-50"
                      style={{ fontFamily: "'Mukta', sans-serif" }}
                    >
                      {host.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-brown-900 via-orange-800 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div
                className="text-7xl font-black mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                ४+
              </div>
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "'Mukta', sans-serif" }}
              >
                महत्वाचे सत्र
              </div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div
                className="text-7xl font-black mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                १५+
              </div>
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "'Mukta', sans-serif" }}
              >
                प्रतिष्ठित पॅनेलिस्ट
              </div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div
                className="text-7xl font-black mb-4 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                500+
              </div>
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "'Mukta', sans-serif" }}
              >
                उपस्थित प्रेक्षक
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="text-8xl animate-bounce">🎉</div>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
            style={{ fontFamily: "'Poppins', sans-serif", lineHeight: "1.6" }}
          >
            आपल्या उपस्थितीची प्रतीक्षा आहे!
          </h2>
          <p
            className="text-2xl text-orange-800 mb-12 font-bold"
            style={{ fontFamily: "'Mukta', sans-serif" }}
          >
            मुंबईच्या भविष्याची चर्चा करण्यासाठी आजच नोंदणी करा!
          </p>
          <Link
            to="/register"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-black py-6 px-16 rounded-full text-2xl transition duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:scale-110 hover:-translate-y-2"
            style={{ fontFamily: "'Mukta', sans-serif" }}
          >
            आता सामील व्हा! →
          </Link>

          <div className="mt-16 p-8 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl">
            <p
              className="text-xl text-orange-900 font-bold mb-2"
              style={{ fontFamily: "'Mukta', sans-serif" }}
            >
              📍 स्थळ: Sahara Star Hotel, Vile Parle
            </p>
            <p
              className="text-xl text-orange-900 font-bold"
              style={{ fontFamily: "'Mukta', sans-serif" }}
            >
              📅 तारीख: 25 डिसेंबर 2025 | ⏰ वेळ: सकाळी 10 वाजता
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Mukta:wght@400;600;700;800&display=swap");

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;