import { Flex, Box, Grid } from '@radix-ui/themes';

export default function Albums() {
  return (
    <section>
      <div className="section-albums">
        <div className="label-albums">Album Hình Cưới</div>
        <div className="desc-albums">
          Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong tình yêu ai
          đó sâu sắc sẽ cho bạn dũng khí.
        </div>
        <div className="grid-wrapper-album">
            <Grid columns="2" gap="8">
                <Flex direction="column" gap="8">

                </Flex>
                <Flex direction="column" gap="8">
                
                </Flex>
            </Grid>
        </div>
      </div>
    </section>
  );
}
