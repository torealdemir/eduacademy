import programsBg from "../../assets/programs-bg.svg";

export default function Programs() {
  return (
    <section id="programlar" className="relative bg-primary">
      <div
        className="
          w-full
          aspect-video       /* 16:9 */
          max-h-[92svh]
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
            object-cover
            object-center
          "
        />
      </div>
    </section>
  );
}
