export const Houses = Object.freeze({
	TANULMANYI: 'Tanulmányi',
	SZOC: 'Szoc',
	PALYAZAT: 'Pályázat',
	PR: 'PR'
});

export const questions = [
	{ question: 'Érdekel a pályázatok elbírálása?', house: Houses.PALYAZAT },
	{
		question: 'Szeretsz hallgatótársaid tanulmányi kérdéseire válaszolni?',
		house: Houses.TANULMANYI
	},
	{ question: 'Érdekel a szociális pályázatok elbírálása?', house: Houses.SZOC },
	{ question: 'Foglalkoznál az ösztöndíjak kialakításával?', house: Houses.PALYAZAT },
	{ question: 'Szeretsz kreatív posztokat gyártani?', house: Houses.PR },
	{ question: 'Tennél az igazságosabb tanulmányi ösztöndíjosztásért?', house: Houses.SZOC },
	{ question: 'Képviselnéd a hallgatók érdekeit az egyetem felé?', house: Houses.TANULMANYI },
	{
		question: 'Szeretsz szociális pályázatokkal kapcsolatos ügyekkel foglalkozni?',
		house: Houses.SZOC
	},
	{
		question: 'Készítenél felméréseket a hallgatók körében különböző tanulmányi témákban?',
		house: Houses.TANULMANYI
	}
];

export const initialAffection = {};
Object.keys(Houses).forEach((house) => {
	initialAffection[Houses[house]] = 0;
});
