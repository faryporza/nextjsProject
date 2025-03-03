import { getImagePath } from '@/utils/imagePath';

export const FeaturesData: {
  imgSrc: string;
  heading: string;
  subheading: string;
}[] = [
    {
      imgSrc: getImagePath('/images/features/featureOne.svg'),
      heading: "การยืนยันตัวตน",
      subheading: "ระบบยืนยันตัวตนด้วยการสแกนใบหน้า",
    },
    {
      imgSrc: getImagePath('/images/features/featureTwo.svg'),
      heading: "การเลือกช่าง",
      subheading: "ระบบเลือกช่างที่คิวว่างมาให้เอง",
    },
    {
      imgSrc: getImagePath('/images/features/featureThree.svg'),
      heading: "การเลือกร้าน",
      subheading: "โชว์ร้านที่ให้บริการที่เกี่ยวข้อง",
    },
  ];

export const ExpertData: {
  profession: string;
  name: string;
  imgSrc: string;
}[] = [
    {
      profession: 'Senior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: getImagePath('/images/Expert/boyone.svg'),
    },
    {
      profession: 'Junior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: getImagePath('/images/Expert/girl.png'),
    },
    {
      profession: 'Junior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: getImagePath('/images/Expert/boytwo.svg'),
    },
    {
      profession: 'Junior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: getImagePath('/images/Expert/girl.png'),
    },
    {
      profession: 'Senior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: getImagePath('/images/Expert/boyone.svg'),
    },
    {
      profession: 'Junior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: getImagePath('/images/Expert/boytwo.svg'),
    },
  ];

// data.tsx
export const galleryImages = [
  { src: getImagePath('/images/Gallery/foodone.jpg')},
  { src: getImagePath('/images/Gallery/foodtwo.jpg')},
  { src: getImagePath('/images/Gallery/foodfour.jpg')},
];
