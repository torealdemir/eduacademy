import programsBg from "../../assets/programs-bg.svg";

export default function Programs() {
  return (
    <section id="programlar" className="relative bg-primary">
      <div
        className="
          relative w-full
          h-[70svh] sm:h-[85svh] lg:h-[100svh]
          flex items-center justify-center
          overflow-hidden
          pointer-events-none select-none
          px-4 sm:px-0
        "
        aria-hidden="true"
      >
        <img
          src={programsBg}
          alt=""
          draggable={false}
          className="
            w-full h-full
            object-contain
            sm:object-cover
            sm:scale-[1.03]
            lg:scale-[1.06]
            object-center
          "
        />
      </div>
    </section>
  );
}
