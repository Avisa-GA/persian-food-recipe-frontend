import { useState } from 'react';
import { StyledTitle } from '../styles';
import { Grid } from '@material-ui/core';

export default function About() {
	const [toggleText, setToggleText] = useState(false);

	const handleToggle = () => {
		setToggleText(!toggleText);
	};

	return (
		<div className="container">
			<StyledTitle style={{ fontSize: '30px', fontWeight: 'bold' }}>
				About Persian Cuisine
			</StyledTitle>
			<br />

			<button
				onClick={handleToggle}
				className="waves-effect waves-light btn teal darken-2"
				disabled={toggleText}>
				History
			</button>
			<button
				onClick={handleToggle}
				className="waves-effect waves-light btn teal darken-2"
				disabled={!toggleText}>
				Food of Iran
			</button>

			{toggleText ? (
				<div className="row  ">
					<Grid
						container
						direction="row"
						style={{ textAlign: 'left' }}
						justifyContent="center"
						alignItems="center">
						<p className="col s12 m8 ">
							Since the beginning of human civilization in present-day Iran, a
							series of peoples has invaded and conquered the region, exposing
							the area to new customs, beliefs, ideas, and foods, as well as
							bringing Iranian customs and foods back to their own home
							countries. The ancient Babylonians, Assyrians, Persians, Greeks,
							Romans, and Turks are just a few of the groups that have had an
							influence on Iranian culture and its cuisine. Iranian cuisine is
							often referred to as "Persian." This is because, until 1934, Iran
							was known as Persia.
						</p>{' '}
						<img
							className="col s12 m4"
							src="https://images.unsplash.com/photo-1624991721151-e746c489fedf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt="persepolis"
						/>
					</Grid>

					<p className="col s12" style={{ textAlign: 'left' }}>
						{' '}
						The Persians are an ancient culture believed to have originated in
						central Asia as far back as 2000 B.C. At one time, Persian territory
						stretched as far east as India. Curry (a spice) was adapted from the
						people of India and incorporated into the Persian (now Iranian)
						cuisine. Modern spicy curry stews demonstrate India's influence. The
						Indians also adapted foods from the Persians. When the Moghuls
						invaded India in 1526, they brought with them ingredients from the
						Persian cuisine, which they highly admired. A northern Indian
						cuisine called mughulai is modeled after what the Persians commonly
						ate: mounds of rice seasoned Iranwith saffron, topped with nuts,
						raisins, and various meats. Dishes such as kofta (KOFtah, meatballs)
						and pilau (POO-lau) are now common to both Iranians and northern
						Indians.
					</p>

					<Grid
						container
						direction="row"
						style={{ textAlign: 'left' }}
						justifyContent="center"
						alignItems="center">
						<p className="col s12 m8">
							{' '}
							Several of Iran's most prominent dishes originated from the
							Greeks, Arabs, Turks, and Russians. Greece invaded present-day
							Iran in the A.D. 200s, introducing stuffed grape leaves. Yogurt
							may have originated from either Greece or Turkey, where it is also
							a dietary staple. The Iranian food rules that categorize foods
							into "hot or "cold" is believed to have been derived from ancient
							Greek theories of medicine (See Mealtime Customs ). Dishes made of
							lamb, dates, and figs were brought into the Persian diet during
							the Arab invasion of the 600s.
						</p>
						<img
							className="col s12 m4 "
							src="https://images.unsplash.com/photo-1579005162638-11c872e1586e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
							alt="tea"
						/>
					</Grid>
					<p className="col s12" style={{ textAlign: 'left' }}>
						{' '}
						Three hundred years later, the Turks expanded their Ottoman Empire
						into Persian territory. The idea of stuffing leaves, vines, fruits,
						and vegetables with various fillings (Turkish dolma ) was reinforced
						by the Turks. Dolma and kofte (meatballs) have become very popular
						throughout the Middle Eastern countries. The kebab (cubes of
						skewered meat) is probably the most important introduction by the
						Turks—it has become one of Iran's national dishes. Strong Turkish
						coffee was also introduced. Once a widely consumed Iranian beverage,
						it has now fallen behind the popularity of chây (tea). The strong,
						dark tea is brewed in an urn called a samovar , a Russian word. Tea
						most likely originated in Russia. Read more{' '}
						<a href="http://www.foodbycountry.com/Germany-to-Japan/Iran.html#ixzz71GRDsrpP">
							here.
						</a>
					</p>
				</div>
			) : (
				<>
					<div className="row  ">
						<Grid
							container
							direction="row"
							style={{ textAlign: 'left' }}
							justifyContent="center"
							alignItems="center">
							<p className="col s12 m8 ">
								Iranian food (also referred to as Persian food) is some of the
								most delicious and fresh in its region. It is also quite
								healthy, using only small amounts of red meat (usually Chây
								(tea), the favorite beverage in Iran, is brewed in a large,
								ornate pot called a samovar. Cory Langley Chây (tea), the
								favorite beverage in Iran, is brewed in a large, ornate pot
								called a samovar. Cory Langley lamb or beef), emphasizing larger
								amounts of grains (especially rice), fruits, and vegetables.
								Although it is often lumped under the category of general
								"Middle Eastern" fare, the Iranian cuisine is able to retain its
								uniqueness in a variety of ways. One of these ways is preparing
								meals with contrasting flavors, such as a combination of sweet
								and sour or mild and spicy.
							</p>
							<img
								className="col s12 m4 "
								src="https://images.unsplash.com/photo-1582231640230-a876a177c229?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
								alt="breads"
							/>
						</Grid>
						<p className="col s12" style={{ textAlign: 'left' }}>
							{' '}
							The country's cuisine is largely based on berenj (rice). It is
							relatively inexpensive and grown locally, making it an affordable
							and readily available staple in the everyday diet. A typical
							Iranian meal is often a heaping plate of chelo (CHEH-loh; plain,
							cooked rice) topped with vegetables, fish, or meat. It also
							provides a cool contrast to spicy meat toppings. The two national
							rice dishes are chelo and polo (POH-loh; rice cooked with several
							ingredients). There are seemingly endless varieties of dishes that
							can be prepared with rice in Iran. Nân (bread), a round, flat
							bread that can either be baked or cooked over a bed of small
							stones, is the other staple food of Iranian cuisine. There are
							several varieties, including lavâsh , a very thin, brittle bread
							served for breakfast, and sangak (sahn-GAHK), a thicker, chewier
							variety that is usually marked by small "dimples" in the crust.
							Villages often make their own nân , while those who live in the
							city are frequently seen leaving bakeries with armfuls of freshly
							made loaves.
						</p>

						<Grid
							container
							direction="row"
							style={{ textAlign: 'left' }}
							justifyContent="center"
							alignItems="center">
							<p className="col s12 m8 ">
								Meat, particularly chicken and lamb, is most commonly eaten as
								kebabs (KEE-bahbs), pieces of meat served on a skewer. Âsh
								(soups) and khoresh (stews) make popular entrees to most Iranian
								meals and often contain such meat. Abgoosht (up-GOOSHT) is a
								hearty soup made of mutton (sheep meat) and chickpeas. Soups are
								drunk directly from the bowl. Koftas (meatballs), vegetables
								(such as eggplant), fruits (such as quince, an apple-like
								fruit), and even yogurt (an Iranian mainstay) are often added to
								soups and stews.
							</p>
							<img
								className="col s12 m4 "
								src="https://images.unsplash.com/photo-1590724629137-2fe53651caad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
								alt="market"
							/>
						</Grid>
						<p className="col s12" style={{ textAlign: 'left' }}>
							Quinces, pears, grapes, dates, apricots, and Iranian melons
							flavored with rosewater are typically eaten for dessert. Halva
							(HAHL-wah, a sesame treat) and baklava (bahk-LAH-vah, crisp
							paper-like pastry layered with nuts and honey) are common
							throughout the Middle East. Iranians also love ice cream and
							puddings. Although sugared chây (tea) is the country's most
							treasured beverage and ghahvé (coffee) is highly popular, Iranians
							(particularly children) often enjoy a sweet drink after large
							meals. Palouden (PAO-loo-den), a rose- and lemon-flavored drink,
							dugh (sour milk or yogurt mixed with sparkling water) and fresh
							fruit juices can be made at home or bought in cafes and at street
							stalls. Read more{' '}
							<a href="http://www.foodbycountry.com/Germany-to-Japan/Iran.html#ixzz71GRDsrpP">
								here.
							</a>
						</p>
					</div>
				</>
			)}
		</div>
	);
}
