import { ComponentSectionsGallery } from "../../utils/@types/strapi";
import { NextImage } from "../elements/image";
import classNames from "classnames";

type GalleryProps = { data: ComponentSectionsGallery };

export const Gallery = ({ data }: GalleryProps) => {
  return (
    <section className="w-full text-center pb-28 max-w-5xl">
      <div className="prose sm:prose-sm md:prose-md mx-auto mb-8">
        {data?.title && <h2>{data.title}</h2>}
        {data?.subtitle && <h3>{data.subtitle}</h3>}
      </div>
      <div
        className={classNames("", {
          "w-full mx-auto": !data.fullscreen,
        })}
      >
        {data?.rows &&
          data.rows.map((row) => {
            const cols = row?.pictures?.length || 0;
            return (
              <div
                key={row?.id}
                className={classNames("", {
                  "w-screen": data.fullscreen,
                  "md:grid gap-x-1 md:gap-x-6": cols > 1,
                  // "col-span-2": cols < 1,
                })}
              >
                {row?.pictures?.map((picture) => {
                  return (
                    <NextImage
                      key={picture?._id || ""}
                      // @ts-ignore
                      media={picture}
                      format="medium"
                    />
                  );
                })}
                {row?.caption && (
                  <div className="col-span-2 p-4 md:py-10">
                    <span className="prose prose-tight md:prose-tightMd">
                      <p className="">{row.caption}</p>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};
