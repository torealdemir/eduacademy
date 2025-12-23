import programsBg from "../../assets/programs-bg.svg";

export default function Programs() {
  return (
    <section id="programlar" className="relative bg-primary">
      <div
        className="
          relative w-full
          h-[80svh] sm:h-[90svh] lg:h-screen
          overflow-hidden
          pointer-events-none select-none
        "
        aria-hidden="true"
      >
        <img
          src={programsBg}
          alt=""
          draggable={false}
          className="
            w-full h-full

            /* MOBİL */
            object-contain
            px-4

            /* TABLET+ */
            sm:px-0
            sm:object-cover

            /* DESKTOP: kenar boşluk yok */
            lg:object-cover
            lg:scale-[1.02]

            object-center
          "
        />
      </div>
    </section>
  );
}
