const speakersList = [
  {
    backImage: 'src="assets/backimage.png" alt="backimage"',
    speakerImage: 'src="assets/speakers/speaker1.png" alt="Desktop-project3"',
    name: 'Edmon ludwing',
    title: '3D Across ArcGIS',
    description: '3D is an essential component of many organizations spatial systems of record and engagement. Esri provides 3D capabilities including customizable and tailored solutions for a wide variety of partners and users.',
  },
  {
    backImage: 'src="assets/backimage.png" alt="backimage"',
    speakerImage: 'src="assets/speakers/speaker2.png" alt="Desktop-project3"',
    name: 'Edmon ludwing',
    title: 'How to Make Your Web App World-Ready!',
    description: 'In this session we will give an overview of what you need to consider when globalizing your web app and show you how Esri’s APIs, SDKs, and component libraries can help you with that task. ',
  },
  {
    backImage: 'src="assets/backimage.png" alt="backimage"',
    speakerImage: 'src="assets/speakers/speaker3.png" alt="Desktop-project3"',
    name: 'Edmon ludwing',
    title: 'Strategies for Web Developers.',
    description: 'This session demonstrates how to design and build useful web mapping apps using the power of ArcGIS. We will explore no-code/low-code options such as map embedding, builders, templates, and ArcGIS Hub',
  },
  {
    backImage: 'src="assets/backimage.png" alt="backimage"',
    speakerImage: 'src="assets/speakers/speaker4.png" alt="Desktop-project3"',
    name: 'Edmon ludwing',
    title: 'Building Web Apps with React',
    description: 'Empower your spatially-enabled React Apps with modern web technologies. In this session, we’ll demonstrate how you can use Calcite Components and React to create a user-friendly experience. ',
  },
  {
    backImage: 'src="assets/backimage.png" alt="backimage"',
    speakerImage: 'src="assets/speakers/speaker5.png" alt="Desktop-project3"',
    name: 'Edmon ludwing',
    title: 'Strategies for Mobile Development.',
    description: 'ArcGIS gives mobile and embedded device developers many tools for building useful mapping applications that use the power of GIS. In this session, we will tour these capabilities, for designing and building your apps using the right tools.',
  },
  {
    backImage: 'src="assets/backimage.png" alt="backimage"',
    speakerImage: 'src="assets/speakers/speaker6.png" alt="Desktop-project3"',
    name: 'Edmon ludwing',
    title: 'Tools for the Modern Web Developer.',
    description: 'The world of web development is constantly changing, and staying abreast of the latest tools like code editors, terminals, linters, and apps is vitally important.',
  },
];

const speakerss = document.querySelector('#speakers');
speakersList.forEach((speaker) => {
  const innerProject = document.createElement('div');
  innerProject.classList.add('flex', 'p-[20px]', 'justify-center', 'gap-5', 'flex-row', 'mb-10', 'relative', 'speaker');
  innerProject.innerHTML = (`
    <img class="left-[-1px] top-[-1px] -z-10 absolute "  ${speaker.backImage}>
    <img class="-z-9" ${speaker.speakerImage}>

    <div class="flex flex-col gap-1">
        <h2 class="text-[1.17rem] text-[#272a31]">${speaker.name}</h2>
        <p class="text-[16px] text-[#ec5242]">${speaker.title}</p>
        <hr class="w-[40px] bg-[#d3d3d3] h-[1px]">
        <p class="text-[12px]" >${speaker.description}</p>
    </div>
      `);
  speakerss.appendChild(innerProject);
});