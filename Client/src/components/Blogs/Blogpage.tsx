import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "../Blogs/Blogpage.css";
const Blog = () => {
  return (
    <div className="all">
      <div className="desc">
        <h1 id="blogg">Blogs</h1>
        <p id="adobe">
          Explore insightful articles and resources on environmental
          sustainability, conservation efforts, and eco-friendly practices in
          our collection of environment-related blogs
        </p>
      </div>
      <div className="cards">
        <div className="indi">
          <Card className="card1">
            <CardHeader>
              <CardTitle>An emergency beak for the climate</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="content">
              <p>
                Originally published in forskning.no. Translated from Norwegian.
                The climate crisis is here. We are experiencing possibly the
                warmest year in human history. Record-warm oceans are
                contributing to historic floods in China, Greece, Slovenia, and
                Norway. Forest fires ruined Northern Europeans’ summer holiday
                and devastated Hawaii’s Mau Island. Hikers in Texas and chicken
                in England die of heat stress. There is broad political support
                for the 1.5°C target in the Paris Agreement, in Norway as in
                Europe.
                <br /> Politicians promised voters to take strong action to
                reduce emissions. Emissions of 350 billion tonnes suffices to
                raise the concentration of carbon dioxide in the atmosphere to
                the level where there is a 50% probability that the average
                temperature will reach or surpass the threshold of 1.5 degrees
                Celsius above the pre-industrial average. Last year, carbon
                emissions from energy and cement production alone reached a
                record 37 billion tonnes, according to Global Carbon Project.
                Without abruptly slowing down, we pass the 1.5 degrees emissions
                budget by around 2030, and summer this year gives us a taste of
                what an average year will look like then. The European Union has
                through the presidency of Ursula van der Leyen done a lot for
                climate protection. The EU’s and Norway’s target for 2030 is to
                reduce emissions by 55% from 1990 levels. The EU had achieved a
                reduction of 32% by 2021, Norway by just 4%. The EU Climate Law
                of 2021 requires the Union to set an emission target for 2040
                and prepare a budget of accumulated emissions for the period
                2030-2050. This is the objective by which future policies in
                industry, energy, transport, and agriculture will be governed.
                <br />
                Norway is obliged to follow EU rules in several of these policy
                areas and has in the past also chosen to set the same emission
                targets.
              </p>
            </CardContent>
            <CardFooter>
              <p>
                Author: Angela Yuu.
                <br />
                <br />
                <br />
              </p>
            </CardFooter>
            <hr></hr>
          </Card>
        </div>
        <div className="indi">
          <Card className="card2">
            <CardHeader>
              <CardTitle>Norway's biodiversity footprint is unknown</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>

            <CardContent>
              <p>
                Vegar Johansen and SINTEF use NTNU’s Industrial Ecology
                Programme as a cover when they defend themselves against
                criticism from Øystein Sjølie of a SINTEF report. The report,
                commissioned by the Norwegian Society for Nature Conservation,
                allegedly shows that pressures on global biodiversity caused by
                Norwegian consumption have tripled since 1995.
                <br />
                It is true that much of the SINTEF report summarises research
                articles in international journals, including articles from
                industrial ecology at NTNU. However, Sjølie criticises an
                analysis of Norway's contribution to nature loss that is not
                elucidated in the underlying reports. Biodiversity loss from
                agricultural production varies depending on location and
                cultivation method. It is precisely the point of the impact
                assessment methods co-developed at NTNU to take such regional
                variations into account. There is generally more loss in
                biodiversity from agriculture in tropical countries because
                biodiversity there is greater to start out with. Coffee
                production, for example, leads to high nature loss.
                <br />
                The articles referred to examine global conditions, and where
                Norway is a small piece of the global economy. They relied on
                the EXIObase database which describes the world's economy and
                resource use with many millions of data points. Our research
                group has collated the data from different sources and used
                balancing calculations to produce as consistent a picture of the
                whole as possible. We cannot take responsibility forquality one
                of some datapoints. Data on agriculture, which the UN Food and
                Agriculture Organization has collected from member states, has
                some gaps and input errors. The data should therefore be used
                with care.
              </p>
            </CardContent>
            <CardFooter>
              <p>
                Author: Edgar.
                <br />
                <br />
                <br />
              </p>
            </CardFooter>
            <hr></hr>
          </Card>
        </div>

        <div className="indi">
          <Card className="card3">
            <CardHeader>
              <CardTitle>Less material use = better climate</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>

            <CardContent>
              <p>
                Material production accounts for close to a quarter of global
                greenhouse gas emissions, but receives little attention compared
                to energy, meat, or deforestation. In a new report for the
                International Resource Panel, we show that reducing the use of
                emissions-intensive materials such as metals and cement in
                buildings and cars can lead to significant emission reductions.
                Savings are greatest with measures that reduce the need for new
                production altogether. Unfortunately, current policy often
                supports and promotes the use of more materials.
                <br />
                It is natural to focus on energy use when we think of greenhouse
                gas emissions from buildings. In many countries, however, it is
                the production of building materials that is causing higher
                emissions than heating or cooling buildings. Scandinavia is a
                leader in the development of carbon-free material production
                with the Swedish Hybrid pilot plant using hydrogen instead of
                carbon to reduce iron ore to iron and the Norwegian carbon
                capture plans for cement production at NorCem in Brevik. It will
                take at least two to three decades for such advanced green
                technologies to transform material production, given that these
                have yet to be tested and commercialization remains. In the
                meantime, the focus should be on reduced use and increased reuse
                of emission-intensive materials.
                <br />
                The articles referred to examine global conditions, and where
                Norway is a small piece of the global economy. They relied on
                the EXIObase database which describes the world's economy and
                resource use with many millions of data points. Our research
                group has collated the data from different sources and used
                balancing calculations to produce as consistent a picture of the
                whole as possible. We cannot take responsibility forquality one
                of some datapoints. Data on agriculture, which the UN Food and
                Agriculture Organization has collected from member states, has
                some gaps and input errors. The data should therefore be used
                with care.
                <br />
                Small is beautiful … Flats in multifamily buildings are smaller
                and often better organized than single-family homes. In
                addition, they tend to have lower energy consumption.
                Multifamily buildings also provide the opportunity to share part
                of the infrastructure. One example are shared guest rooms, which
                can be reserved if needed, rather than every flat having their
                own guest room. Unfortunately, in some countries such as the
                United States, tax breaks for home ownership are designed to
                favour single family homes. … but large is more profitable
              </p>
            </CardContent>
            <CardFooter>
              <p>
                Author: Liam Williamson.
                <br />
                <br />
                <br />
              </p>
            </CardFooter>
          </Card>
        </div>
        <div className="indi">
          <Card className="card4">
            <CardHeader>
              <CardTitle>How to force down climate impact</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>

            <CardContent>
              <p>
                Vegar Johansen and SINTEF use NTNU’s Industrial Ecology
                Programme as a cover when they defend themselves against
                criticism from Øystein Sjølie of a SINTEF report. The report,
                commissioned by the Norwegian Society for Nature Conservation,
                allegedly shows that pressures on global biodiversity caused by
                Norwegian consumption have tripled since 1995.
                <br />
                It is true that much of the SINTEF report summarises research
                articles in international journals, including articles from
                industrial ecology at NTNU. However, Sjølie criticises an
                analysis of Norway's contribution to nature loss that is not
                elucidated in the underlying reports. Biodiversity loss from
                agricultural production varies depending on location and
                cultivation method. It is precisely the point of the impact
                assessment methods co-developed at NTNU to take such regional
                variations into account. There is generally more loss in
                biodiversity from agriculture in tropical countries because
                biodiversity there is greater to start out with. Coffee
                production, for example, leads to high nature loss.
                <br />
                The articles referred to examine global conditions, and where
                Norway is a small piece of the global economy. They relied on
                the EXIObase database which describes the world's economy and
                resource use with many millions of data points. Our research
                group has collated the data from different sources and used
                balancing calculations to produce as consistent a picture of the
                whole as possible. <br />
                We cannot take responsibility forquality one of some datapoints.
                Data on agriculture, which the UN Food and Agriculture
                Organization has collected from member states, has some gaps and
                input errors. The data should therefore be used with care.
              </p>
            </CardContent>
            <CardFooter>
              <p>
                Author: Dr.Dames Charles.
                <br />
                <br />
                <br />
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
