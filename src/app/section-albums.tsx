import { Flex, Box, Grid } from "@radix-ui/themes";
import Image from "next/image";
import album1 from "./static/albums/album1.jpg";
import album2 from "./static/albums/album2.jpg";
import album3 from "./static/albums/album3.jpg";
import album4 from "./static/albums/album4.jpg";
import album5 from "./static/albums/album5.jpg";
import album6 from "./static/albums/album6.jpg";
import album7 from "./static/albums/album7.jpg";
import album8 from "./static/albums/album8.jpg";

export default function Albums() {
  return (
    <section>
      <div className="section-albums section-global">
        <div className="label-albums">Album Hình Cưới</div>
        <div className="desc-albums">
          Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong tình yêu ai
          đó sâu sắc sẽ cho bạn dũng khí.
        </div>
        <div className="grid-wrapper-album">
          <Grid columns="2" gap="2">
            <Flex direction="column" gap="2">
              <Box>
                <div className="thumbnail-wrapper">
                  <Image
                    src={album1}
                    // width={421.59}
                    // height={419.55}
                    alt="Albums"
                  />
                </div>
              </Box>
              <Box>
                <div className="thumbnail-wrapper">
                  <Image
                    src={album2}
                    // width={421.59}
                    // height={419.55}
                    alt="Albums"
                  />
                </div>
              </Box>
              <Box>
                <div className="thumbnail-wrapper">
                  <Image
                    src={album6}
                    // width={421.59}
                    // height={419.55}
                    alt="Albums"
                  />
                </div>
              </Box>
              <Box>
                <div className="thumbnail-wrapper">
                  <Image
                    src={album4}
                    // width={421.59}
                    // height={419.55}
                    alt="Albums"
                  />
                </div>
              </Box>
            </Flex>
            <Flex direction="column" gap="2">
              <Box>
                <div className="thumbnail-wrapper">
                  <Image
                    src={album5}
                    // width={421.59}
                    // height={419.55}
                    alt="Albums"
                  />
                </div>
              </Box>
              <Box>
                <div className="thumbnail-wrapper">
                  <Image
                    src={album3}
                    // width={421.59}
                    // height={419.55}
                    alt="Albums"
                  />
                </div>
              </Box>
              <Box>
                <div className="thumbnail-wrapper">
                  <Image
                    src={album7}
                    // width={421.59}
                    // height={419.55}
                    alt="Albums"
                  />
                </div>
              </Box>
              <Box>
                <div className="thumbnail-wrapper">
                  <Image
                    src={album8}
                    // width={421.59}
                    // height={419.55}
                    alt="Albums"
                  />
                </div>
              </Box>
            </Flex>
          </Grid>
        </div>
      </div>
    </section>
  );
}
