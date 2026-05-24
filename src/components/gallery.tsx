import Image from "next/image";

export interface GalleryItem {
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
  readonly width: number;
  readonly height: number;
}

interface GalleryProps {
  readonly items: ReadonlyArray<GalleryItem>;
  readonly title?: string;
  readonly note?: string;
  readonly columns?: 2 | 3;
}

export function Gallery({
  items,
  title,
  note,
  columns = 2,
}: GalleryProps) {
  const gridCols =
    columns === 3
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2";

  return (
    <figure className="my-10 border border-rule bg-bg-2 p-4 sm:p-6">
      {title && (
        <figcaption className="mono stencil text-[11px] text-accent mb-4">
          {title}
        </figcaption>
      )}
      <div className={`grid ${gridCols} gap-3`}>
        {items.map((item) => (
          <div
            key={item.src}
            className="border border-rule bg-bg overflow-hidden"
          >
            <div className="relative aspect-[4/3] bg-bg-3">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="object-cover w-full h-full"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            {item.caption && (
              <p className="mono text-[11px] text-fg-3 p-3 leading-relaxed border-t border-rule">
                {item.caption}
              </p>
            )}
          </div>
        ))}
      </div>
      {note && (
        <p
          className="mono text-[10px] stencil text-fg-3 mt-4 leading-relaxed"
          style={{ letterSpacing: "0.08em" }}
        >
          {note}
        </p>
      )}
    </figure>
  );
}
