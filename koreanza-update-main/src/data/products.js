// Category Covers
import eyeCover from '../assets/Images/Eye/Eyes.png';
import faceCover from '../assets/Images/face/face.png';
import lipCover from '../assets/Images/lip/Lips.png';
import skincareCover from '../assets/Images/skincaree/skincare.png';

// Eyes Products
import eyeEyeliner from '../assets/Images/Eye/eyeliner-removebg-preview (1).png';
import eyeMascara from '../assets/Images/Eye/mascara-removebg-preview.png';
import eyeTwinklePop from '../assets/Images/Eye/twinkle_pop_eye_shadow-removebg-preview.png';
import eyeShimmer1 from '../assets/Images/Eye/twoedit_eue_shimmer_2-removebg-preview.png';
import eyeShimmer2 from '../assets/Images/Eye/twoedit_eye_shimmer_1-removebg-preview.png';

// Face Products
import faceBlush from '../assets/Images/face/cushion_blush-removebg-preview.png';
import faceFoundation from '../assets/Images/face/peachmanu_foundation-removebg-preview.png';
import faceGlowCream from '../assets/Images/face/peachmnu_glow_cream-removebg-preview.png';
import faceWrinkleCream from '../assets/Images/face/wrinkle_cream-removebg-preview.png';

// Hensam Products
import Hansam from '../assets/Images/Hensam/Hansam.png';
import Hensam1 from '../assets/Images/Hensam/Hensam1.png';
import Hensam2 from '../assets/Images/Hensam/Hensam2.png';
import Hensam3 from '../assets/Images/Hensam/Hensam3.png';

// Lip Products
import lipTag from '../assets/Images/lip/Tag.jpg';
import lipSerumBlue from '../assets/Images/lip/cleaderm lip serum milky blue.jpg';
import lipSerumPink from '../assets/Images/lip/cleaderm lip serum plim pink.jpg';
import lipGlowSerum from '../assets/Images/lip/peachmanu glow lip serum.jpg';
import lipShades from '../assets/Images/lip/Tag.jpg';

// Skincare Products
import skinAloe from '../assets/Images/skincaree/alove.png';

import skinCollagen from '../assets/Images/skincaree/collagn.png';
import skinCucumber from '../assets/Images/skincaree/cucumber.png';
import skinHoney from '../assets/Images/skincaree/face_mask_honey.png';
import skinPome from '../assets/Images/skincaree/face_mask_pome.png';
import skinSheet from '../assets/Images/skincaree/face_mask_shee.png';
import skinRose from '../assets/Images/skincaree/face_maskrose.png';
import skinHydration from '../assets/Images/skincaree/hydration.png';
import skinFaceWash1 from '../assets/Images/skincaree/jas_perfect_face_wash__2.png';
import skinFaceWash2 from '../assets/Images/skincaree/jas_perfect_face_wash.png';
import skinFaceWash3 from '../assets/Images/skincaree/jas_perfect_facewash-removebg-preview.png';
import skinFaceWash4 from '../assets/Images/skincaree/jas_perfect_facewash__2_.png';
import skinMisha from '../assets/Images/skincaree/misha_face_cleansing-removebg-preview.png';
import skinMain from '../assets/Images/skincaree/skincare-removebg-preview.png';
import skinTeaTree from '../assets/Images/skincaree/tea_tree-removebg-preview.png';
import skinVitaminC from '../assets/Images/skincaree/vitamin_c-removebg-preview.png';

export const categories = [
    { id: 1, name: 'Eyes Products', img: eyeCover },
    { id: 2, name: 'Lip Products', img: lipCover },
    { id: 3, name: 'Face Products', img: faceCover },
    { id: 4, name: 'Skincare', img: skincareCover },
    { id: 5, name: 'Herbal Wellness', img: Hansam },
];

export const products = [
    // Eyes Products
    {
        id: 1,
        name: 'Slim Brown Eyeliner',
        category: 'Eyes Products',
        price: 'Rs 899',
        originalPrice: 'Rs 1299',
        stock: 12,
        finish: 'Matte & Natural',
        benefits: 'Long-lasting, smudge-proof, easy application',
        description: 'Slim Brown Eyeliner gives a natural and soft eye look. It is easy to apply and helps define the eyes smoothly. The brown color is perfect for everyday makeup.',
        howToUse: '1. Start with clean, dry eyelids.\n2. Gently draw a thin line along the upper lash line.\n3. Begin from the inner corner and move outward.\n4. For a darker look, apply another layer.\n5. You can also lightly apply on the lower lash line for a soft finish.',
        img: eyeEyeliner
    },
    {
        id: 2,
        name: 'Volume Mascara',
        category: 'Eyes Products',
        price: 'Rs 999',
        originalPrice: 'Rs 1399',
        stock: 15,
        finish: 'Intense Black',
        benefits: 'Thickening, lengthening, clump-free',
        description: 'Volume mascara makes eyelashes look thicker, fuller, and darker. It adds volume to the lashes and makes the eyes look bigger and more defined. It is suitable for daily and party makeup.',
        howToUse: '1. Start with clean, dry eyelashes.\n2. Apply mascara from the root of the lashes to the tips.\n3. Move the brush in a zig-zag motion for more volume.\n4. Apply a second coat if you want extra thickness.',
        img: eyeMascara
    },
    {
        id: 3,
        name: 'Twinkle Pop Eye Shadow',
        category: 'Eyes Products',
        price: 'Rs 3499',
        originalPrice: 'Rs 4799',
        stock: 8,
        finish: 'Shimmer & Glitter',
        benefits: 'High pigment, easy to blend, radiant glow',
        description: 'Twinkle Pop eye shadow palette is a Korean makeup palette with soft, pretty colors. It usually has light, medium, and shimmer shades that are easy to blend. The colors give a natural, fresh, and glowing look, perfect for daily and party makeup.',
        howToUse: '1. Use a brush or your finger to apply matte shade over your eyelid.\n2. Apply the shimmer shade to your lid and lower lash line for a touch of sparkle.\n3. Use the glitter shade to highlight the center of your lid or corner of your eyes.\n4. Blend well for a smooth and soft finish.',
        img: eyeTwinklePop
    },
    {
        id: 4,
        name: 'Twoedit Eye Shimmer - Gold Dawn',
        category: 'Eyes Products',
        price: 'Rs 1999',
        originalPrice: 'Rs 2799',
        stock: 10,
        finish: 'Metallic Shimmer',
        benefits: 'Luminous finish, creamy texture',
        description: 'A luxurious eye shimmer that provides a metallic glow. Its creamy formula blends seamlessly, offering a multidimensional sparkle that stays all day.',
        howToUse: 'Dab onto the center of the eyelid with your fingertip or a flat brush. Blend edges for a soft, radiant look.',
        img: eyeShimmer1
    },
    {
        id: 5,
        name: 'Twoedit Eye Shimmer - Rose Glow',
        category: 'Eyes Products',
        price: 'Rs 1999',
        originalPrice: 'Rs 2799',
        stock: 10,
        finish: 'Rose Metallic',
        benefits: 'Soft glow, crease-resistant',
        description: 'Add a touch of elegance with our Rose Glow shimmer. Highly pigmented and easy to apply, it creates a romantic, sparkling eye look in seconds.',
        howToUse: 'Apply directly to the eyelid and blend. Can be used alone or as a topper for matte eye shadows.',
        img: eyeShimmer2
    },

    // Lip Products
    {
        id: 10,
        name: 'Cleaderm Lip Serum - Milky Blue',
        category: 'Lip Products',
        price: 'Rs 2999',
        originalPrice: 'Rs 4299',
        stock: 18,
        finish: 'Glossy & Plump',
        benefits: 'Collagen-infused, blurs lip wrinkles',
        description: 'A viscous, collagen textured lip serum that forms a milky layer to blur and plump lip wrinkles, giving a dewy, moisturized look.',
        howToUse: 'Spread evenly across the lips.',
        img: lipSerumBlue
    },
    {
        id: 11,
        name: 'Cleaderm Lip Serum - Plum Pink',
        category: 'Lip Products',
        price: 'Rs 2999',
        originalPrice: 'Rs 4299',
        stock: 18,
        finish: 'Soft Pink Gloss',
        benefits: 'Deep hydration, plumping effect',
        description: 'A viscous, collagen textured lip serum that forms a milky layer to blur and plump lip wrinkles, giving a dewy, moisturized look.',
        howToUse: 'Spread evenly across the lips.',
        img: lipSerumPink
    },
    {
        id: 12,
        name: 'Peachmanu Glow Lip Serum',
        category: 'Lip Products',
        price: 'Rs 2999',
        originalPrice: 'Rs 4299',
        stock: 22,
        finish: 'Soft Glossy Shine',
        benefits: 'Lightweight, non-sticky, hydrating',
        description: 'A lightweight, hydrating lip serum that gives lips a soft, glossy shine while keeping them smooth and moisturized.',
        howToUse: 'Apply a thin layer on your lips anytime you want hydration or shine. Reapply as needed throughout the day.',
        img: lipGlowSerum
    },
    {
        id: 29,
        name: 'Lip Tag Tint',
        category: 'Lip Products',
        price: 'Rs 2999',
        originalPrice: 'Rs 4299',
        stock: 30,
        finish: 'Velvet Matte',
        benefits: 'High pigment, long wear',
        description: 'A vibrant lip tint that provides long-lasting color with a soft velvet matte finish. Perfect for all-day wear.',
        howToUse: 'Apply to center of lips and blend outwards for a gradient effect.',
        img: lipTag
    },
    {
        id: 30,
        name: 'Lip Shades Palette',
        category: 'Lip Products',
        price: 'Rs 2999',
        originalPrice: 'Rs 4299',
        stock: 15,
        finish: 'Multi-finish',
        benefits: 'Versatile, moisturizing',
        description: 'A collection of our most popular lip shades in one palette. Choose from matte to glossy finishes to suit any mood.',
        howToUse: 'Use a lip brush to apply and mix shades for a custom look.',
        img: lipShades
    },

    // Face Products (Including additions from skincaree folder to reach 16+ products)
    // Face Products (Items from imgs/face folder)
    {
        id: 6,
        name: 'Personal Cushion Blusher',
        category: 'Face Products',
        price: 'Rs 1500',
        originalPrice: 'Rs 2000',
        stock: 50,
        finish: 'Radiant & Dewy',
        benefits: 'Instant vitality, idol-like glow',
        description: 'A radiant cushion blusher that boosts vitality, giving you a 100% idol-like glow.',
        howToUse: 'At the final step of your base makeup, take an appropriate amount onto a puff and gently pat it around the cheeks.',
        img: faceBlush
    },
    {
        id: 7,
        name: 'Peachmanu Foundation',
        category: 'Face Products',
        price: 'Rs 3499',
        originalPrice: 'Rs 4899',
        stock: 12,
        finish: 'Dewy Finish',
        skinType: 'All Skin Types',
        benefits: 'SPF 50+ PA+++, hydrating, serum-infused',
        description: 'A serum-infused cushion foundation that gives a dewy, natural glow. It provides light to medium coverage, keeps skin hydrated, and blends smoothly without feeling heavy. Enriched with peach, cica, and honey, plus SPF 50+ PA+++ for daily sun protection. Ideal for a fresh, natural look.',
        howToUse: '1. Clean and moisturize your face.\n2. Press the cushion puff lightly into the foundation.\n3. Gently tap the puff onto your face (do not rub).\n4. Start from the center and blend outward.\n5. Build coverage by adding more if needed.',
        img: faceFoundation
    },
    {
        id: 8,
        name: 'Peachmanu Glow Cream',
        category: 'Face Products',
        price: 'Rs 3499',
        originalPrice: 'Rs 4899',
        stock: 14,
        skinType: 'Sensitive & Normal',
        benefits: 'Hydrating, soothing, skin-smoothing',
        description: 'Peach Manu Glow Cream by Parnell is a K-beauty moisturizing cream designed to provide a natural, radiant glow, improve hydration, soothe the sensitive skin, and smooth texture, often featuring peach and cica extracts for skin health, working as a daily hydrator or night treatment for luminous, clear skin.',
        howToUse: '1. Cleanse your face first.\n2. Apply your toner/serum (optional).\n3. Take a small amount of Peachmanu Glow Cream on your fingers.\n4. Gently massage it all over your face and neck.\n5. Use it morning and night for best results.',
        img: faceGlowCream
    },
    {
        id: 9,
        name: 'Advanced Wrinkle Cream',
        category: 'Face Products',
        price: 'Rs 2999',
        originalPrice: 'Rs 4299',
        stock: 15,
        skinType: 'Mature Skin',
        benefits: 'Anti-aging, firming, melanin removal',
        description: 'Formulated with Avocado tree butter and Carbomer, this cream targets facial wrinkles and improves elasticity. It helps firm the skin, removes melanin, and provides anti-oxidation protection with hydrolyzed silk to regenerate vitality.',
        howToUse: '1. Cleanse and tone your face.\n2. Take a pea-sized amount of wrinkle cream.\n3. Gently massage it onto your face and neck, focusing on areas with fine lines.\n4. Use morning and night for best results.',
        img: faceWrinkleCream
    },

    // Skincare Products (Items from imgs/skincaree folder)
    {
        id: 13,
        name: 'Grace Day Sheet Mask - Collagen',
        category: 'Skincare',
        price: 'Rs 899',
        originalPrice: 'Rs 1270',
        stock: 40,
        description: 'Grace Day sheet masks are Korean skincare products featuring a soft cellulose sheet infused with various essences (like Snail, Collagen, Hyaluronic Acid, Honey, Tea Tree, Rose, or Aloe) to deliver targeted hydration, nourishment, soothing, or anti-aging benefits, leaving skin soft, glowing, elastic, and revitalized for all skin types, often with a focus on natural ingredients and a gentle feel.',
        howToUse: '1. Clean your face with face wash and pat dry.\n2. Open the mask and gently place it on your face, aligning eyes, nose, and lips.\n3. Leave it on for 15–20 minutes.\n4. Remove the mask and gently massage the remaining serum into your skin.\n5. Do not wash your face after.\n6. Finish with moisturizer if needed.',
        img: skinCollagen
    },
    {
        id: 14,
        name: 'Grace Day Sheet Mask - Aloe Vera',
        category: 'Skincare',
        price: 'Rs 899',
        originalPrice: 'Rs 1270',
        stock: 35,
        skinType: 'Sensitive & Dry',
        benefits: 'Soothing, cooling, moisturizing',
        description: 'Infused with Aloe Vera, this mask provides immediate relief to tired skin, offering deep hydration and a soothing effect.',
        howToUse: 'Place on face for 15-20 minutes. Best used after high sun exposure.',
        img: skinAloe
    },
    {
        id: 15,
        name: 'Grace Day Sheet Mask - Tea Tree',
        category: 'Skincare',
        price: 'Rs 899',
        originalPrice: 'Rs 1270',
        stock: 30,
        skinType: 'Oily & Acne-Prone',
        benefits: 'Anti-bacterial, calming, oil-control',
        description: 'The Tea Tree sheet mask helps control excess sebum and calms irritation, perfect for clearer skin.',
        howToUse: 'Apply for 15-20 minutes on clean skin.',
        img: skinTeaTree
    },
    {
        id: 16,
        name: 'Grace Day Sheet Mask - Honey',
        category: 'Skincare',
        price: 'Rs 899',
        originalPrice: 'Rs 1270',
        stock: 25,
        skinType: 'Dry Skin',
        benefits: 'Nourishing, glowing, softening',
        description: 'Enriched with honey extract, this mask provides deep nourishment and a natural glow, leaving skin feeling silky smooth.',
        howToUse: 'Apply to clean face for 15-20 minutes and massage in essence.',
        img: skinHoney
    },
    {
        id: 17,
        name: 'Grace Day Sheet Mask - Pomegranate',
        category: 'Skincare',
        price: 'Rs 899',
        originalPrice: 'Rs 1270',
        stock: 20,
        skinType: 'Aging Skin',
        benefits: 'Firming, revitalizing, antioxidant',
        description: 'Pomegranate extract helps firm and revitalize the skin while providing strong antioxidant protection.',
        howToUse: 'Use 2-3 times a week for 20 minutes for best results.',
        img: skinPome
    },
    {
        id: 18,
        name: 'Grace Day Sheet Mask - Rose',
        category: 'Skincare',
        price: 'Rs 899',
        originalPrice: 'Rs 1270',
        stock: 15,
        skinType: 'Dull Skin',
        benefits: 'Brightening, hydrating, calming',
        description: 'The Rose mask focuses on brightening the complexion and providing deep hydration with a calming floral scent.',
        howToUse: 'Apply to face and relax for 15-20 minutes.',
        img: skinRose
    },
    {
        id: 19,
        name: 'Grace Day Sheet Mask - Vitamin C',
        category: 'Skincare',
        price: 'Rs 899',
        originalPrice: 'Rs 1270',
        stock: 12,
        skinType: 'Tired Skin',
        benefits: 'Instant radiance, brightening',
        description: 'Packed with Vitamin C to revitalize dull and tired skin, providing an instant radiation boost.',
        howToUse: 'Massage remaining serum into neck and chest after removing mask.',
        img: skinVitaminC
    },
    {
        id: 20,
        name: 'Grace Day Sheet Mask - Cucumber',
        category: 'Skincare',
        price: 'Rs 899',
        originalPrice: 'Rs 1270',
        stock: 18,
        skinType: 'All Skin Types',
        benefits: 'Cooling, hydrating, refreshing',
        description: 'Cucumber extract provides a cool, refreshing sensation while deeply hydrating the skin.',
        howToUse: 'Perfect for use after a long day in the sun.',
        img: skinCucumber
    },
    {
        id: 21,
        name: 'Grace Day Sheet Mask - Hyaluronic Acid',
        category: 'Skincare',
        price: 'Rs 899',
        originalPrice: 'Rs 1270',
        stock: 22,
        skinType: 'Very Dry Skin',
        benefits: 'Intense hydration, plumping',
        description: 'Infused with Hyaluronic Acid for intense hydration that plumps the skin and reduces fine lines.',
        howToUse: 'Apply to clean face and leave for 20 minutes.',
        img: skinHydration
    },
    {
        id: 22,
        name: 'Grace Day Sheet Mask - Pearl Essence',
        category: 'Skincare',
        price: 'Rs 899',
        originalPrice: 'Rs 1270',
        stock: 10,
        skinType: 'All Skin Types',
        benefits: 'Luminous glow, evening skin tone',
        description: 'Pearl extract helps even out skin tone and provides a luminous, pearlescent glow to the face.',
        howToUse: 'Use weekly for maintained radiance.',
        img: skinSheet
    },
    {
        id: 23,
        name: 'Jas Perfect Foam - Collagen',
        category: 'Skincare',
        price: 'Rs 1899',
        originalPrice: 'Rs 2700',
        stock: 15,
        description: 'Jas Perfect Foam is a gentle facial cleanser that creates a soft, foamy lather to remove dirt, oil, and makeup from your skin. It leaves your face clean, fresh, and smooth without feeling tight or dry.',
        howToUse: '1. Wet your face with water.\n2. Squeeze a small amount of the foam onto your palms.\n3. Gently massage the foam onto your face in circular motions.\n4. Rinse thoroughly with water.\n5. Pat dry with a towel.',
        img: skinFaceWash1
    },
    {
        id: 24,
        name: 'Jas Perfect Foam - White',
        category: 'Skincare',
        price: 'Rs 1899',
        originalPrice: 'Rs 2700',
        stock: 20,
        skinType: 'Dull Skin',
        benefits: 'Brightening, deep cleaning',
        description: 'The White variant focuses on brightening the skin tone during your daily cleansing routine.',
        howToUse: 'Use morning and evening for best results.',
        img: skinFaceWash2
    },
    {
        id: 25,
        name: 'Jas Perfect Foam - Acne Care',
        category: 'Skincare',
        price: 'Rs 1899',
        originalPrice: 'Rs 2700',
        stock: 12,
        skinType: 'Acne-Prone Skin',
        benefits: 'Oil control, clearing, soothing',
        description: 'Specifically formulated to help clear acne and control excess oil without drying out the skin.',
        howToUse: 'Gently massage onto affected areas and rinse well.',
        img: skinFaceWash3
    },
    {
        id: 26,
        name: 'Jas Perfect Foam - Hydro',
        category: 'Skincare',
        price: 'Rs 1899',
        originalPrice: 'Rs 2700',
        stock: 18,
        skinType: 'Dry & Sensitive',
        benefits: 'Moisturizing wash, soft foam',
        description: 'The Hydro variant provides a moisturizing cleanse that leaves skin feeling soft and hydrated.',
        howToUse: 'Perfect for a gentle morning cleanse.',
        img: skinFaceWash4
    },
    {
        id: 27,
        name: 'Pure Micro Whip Cleansing Foam',
        category: 'Skincare',
        price: 'Rs 1999',
        originalPrice: 'Rs 2850',
        stock: 10,
        skinType: 'All Skin Types',
        benefits: 'Pore-purifying, ultra-fine lather',
        description: 'A "pure micro whip cleansing foam" is a facial cleanser known for its rich, dense, ultra-fine foam that deeply cleans pores by lifting dirt, oil, and dead skin cells while remaining gentle and hydrating.',
        howToUse: '1. Wet your face with water.\n2. Take a small amount of cleansing foam on your hand.\n3. Gently massage on face in circular motions.\n4. Rinse well with lukewarm water.\n5. Pat dry with a towel.',
        img: skinMisha
    },
    {
        id: 28,
        name: 'Green Tea Deep Cleansing Foam',
        category: 'Skincare',
        price: 'Rs 1999',
        originalPrice: 'Rs 2850',
        stock: 14,
        skinType: 'Oily & Combination',
        benefits: 'Antioxidant, refreshing cleanse',
        description: 'Enriched with green tea extract to provide a refreshing and antioxidant-rich cleansing experience.',
        howToUse: 'Rinse with lukewarm water after massaging face.',
        img: skinMain
    },
    {
        id: 31,
        name: 'Hyaluronic Acid Essence',
        category: 'Skincare',
        price: 'Rs 1999',
        originalPrice: 'Rs 2850',
        stock: 12,
        skinType: 'Dry Skin',
        benefits: 'Intense moisture, smooth texture',
        description: 'A powerful hydrating essence that locks in moisture for a plump and youthful appearance.',
        howToUse: 'Apply after toner. Pat gently onto face.',
        img: skinHydration
    },
    {
        id: 32,
        name: 'Collagen Firming Cream',
        category: 'Skincare',
        price: 'Rs 1999',
        originalPrice: 'Rs 2999',
        stock: 8,
        skinType: 'Aging Skin',
        benefits: 'Firming, reduces fine lines',
        description: 'Rich in collagen, this cream helps restore skin elasticity and firmness.',
        howToUse: 'Use as the last step of your skincare routine.',
        img: skinCollagen
    },
    {
        id: 33,
        name: 'Vitamin C Brightening Serum',
        category: 'Skincare',
        price: 'Rs 899',
        originalPrice: 'Rs 1299',
        stock: 15,
        skinType: 'All Skin Types',
        benefits: 'Brightening, antioxidant',
        description: 'Vibrant and effective, this serum targets dark spots and dullness.',
        howToUse: 'Apply 2-3 drops before moisturizer.',
        img: skinVitaminC
    },

    // Hensam Products
    {
        id: 34,
        name: 'Hansam Korean Herbal Hair Oil',
        category: 'Herbal Wellness',
        price: 'Rs 3699',
        originalPrice: 'Rs 3499',
        stock: 45,
        benefits: 'Growth boost, strengthening, silky shine',
        description: "Hansam – Elixir Royale Hair Oil\n\nKorean Herbal Traditional Oil\n\nDiscover the royal secret of healthy, beautiful hair with Hansam Elixir Royale, a luxurious Korean-inspired herbal hair oil crafted to boost hair growth, strengthen roots, and deliver a silky, radiant shine.\n\nInfused with Korean Ginseng and a premium herbal oil complex, this lightweight yet deeply nourishing formula revitalizes the scalp, reduces hair breakage, and restores natural vitality to dull, weak hair. Inspired by time-honored Korean herbal traditions, Elixir Royale promotes stronger, smoother, and healthier-looking hair with every use.\n\nKey Benefits\n• Boosts healthy hair growth\n• Strengthens hair roots and reduces breakage\n• Enhances silky smoothness and natural shine\n• Nourishes scalp and improves hair texture\n\nPowered by Premium Ingredients\n• Sesamum Indicum (Sesame Oil) – Deep nourishment & strength\n• Black Seed – Supports scalp health\n• Black Soybean – Promotes stronger, thicker hair\n• Mugwort – Soothes and revitalizes the scalp\n• Sesame Oil – Adds shine and moisture\n• Green Tea – Rich in antioxidants\n• Rosemary – Stimulates scalp and hair follicles\n\nFree From\n• Silicone\n• Mineral Oil\n• Preservatives\n• Synthetic Fragrance\n• Parabens",
        howToUse: 'How to Use\n1. Apply a small amount to the scalp and hair roots.\n2. Massage gently until fully absorbed.\n3. Use before shower or overnight for deep nourishment and best results.\n',
        img: Hensam1
    },
    {
        id: 35,
        name: 'Premium Herbal Weight Loss',
        category: 'Herbal Wellness',
        price: 'Rs 4500',
        originalPrice: 'Rs 2899',
        stock: 35,
        benefits: 'Metabolism support, weight control, energy balance',
        description: "Metabo Burn Formula\n\nPremium Korean Herbal Weight Balance Blend\n\nMetabo Burn Formula is a carefully crafted premium herbal blend designed to support metabolism, digestion, appetite control, and natural weight balance. Inspired by Korean herbal tradition, this advanced formula combines time-honored herbs with modern wellness principles to help your body achieve sustainable, healthy balance.\n\nPowered by Korean Red Ginseng and 12+ premium herbal actives, Metabo Burn Formula helps energize metabolism, improve digestive efficiency, and support mindful appetite control—making it an ideal companion for a healthy lifestyle.\n\nKey Benefits\n• Supports healthy metabolism and energy levels\n• Aids digestion and nutrient absorption\n• Helps control appetite and cravings\n• Supports natural and balanced weight management\n\nKey Herbal Actives\n• Korean Red Ginseng – Boosts metabolic vitality and energy\n• Gymnema – Helps reduce sugar cravings and appetite\n• Garcinia – Supports fat metabolism and weight balance\n• Matcha – Rich in antioxidants, supports fat oxidation\n• Licorice Root – Supports digestion and gut comfort\n• 12+ Premium Herbal Actives – For holistic metabolic support\nStorage Instructions\n• Keep container tightly sealed\n• Store in a cool, dry place away from direct sunlight\n\nShelf Life\n• Best before 24 months from the date of manufacturing\n\n🌿 Metabo Burn Formula – Inspired by Korean herbal wisdom for balanced metabolism and natural weight harmony.",
        howToUse: ' Take 1 teaspoon (approx. 3–5 g) with warm water\n• Consume 30–60 minutes before meals\n• Use twice daily for best results\n',
        img: Hensam2
    },
    {
        id: 36,
        name: 'Hansam Herbal Tradition Shampoo',
        category: 'Herbal Wellness',
        price: 'Rs 4099',
        originalPrice: 'Rs 2599',
        stock: 35,
        benefits: 'Hair-loss prevention, thickening, scalp relief',
        description: "Hansam – Korean Herbal Tradition Shampoo\n\nHair Loss • Thickening • Scalp Relief\n\nExperience the power of ancient Korean herbal care with Hansam Korean Herbal Tradition Shampoo—a gentle, daily-use herbal formula designed to reduce hair fall, support thicker-looking hair, and soothe an irritated scalp.\n\nThis mild yet effective shampoo deeply cleanses excess sebum and product buildup without stripping natural moisture. Enriched with Korean Ginseng and a carefully selected Herbal Complex, it helps strengthen hair from the roots, improve scalp balance, and promote healthier, fuller-looking hair with continued use.\n\nKey Benefits\n• Helps reduce hair loss and breakage\n• Supports thicker, fuller-looking hair\n• Gently cleanses excess oil and buildup\n• Soothes dandruff and scalp irritation\n• Strengthens scalp for daily balance\n\nEnriched with Korean Herbal Complex\n• Panax Ginseng Root Extract – Strengthens roots and supports hair growth\n• Houttuynia Cordata Extract – Calms and purifies the scalp\n• Artemisia (Mugwort) Extract – Soothes irritation and promotes scalp comfort\n• Glycine Max (Black Soybean) Seed Extract – Nourishes and strengthens hair\n\nIngredients\nWater (Aqua), Cocamidopropyl Betaine, Panax Ginseng Root Extract, Houttuynia Cordata Extract, Artemisia Princeps Extract, Glycine Max Seed Extract, Sodium Chloride, Sodium Lauryl Methyl Isethionate, Citric Acid, Caprylyl Glycol, Herbal Fragrance, Sodium Benzoate, Potassium Sorbate.\n\nFree From\n• Silicones\n• Sulfates\n• Parabens\n• Mineral Oil\n• Synthetic Colorants\n• Animal-Derived Ingredients\n\n🌿 Hansam Korean Herbal Tradition Shampoo – Gentle cleansing, stronger roots, and balanced scalp care inspired by Korea's herbal legacy.",
        howToUse: "1. Apply to wet hair.\n2. Lather well and gently massage into scalp and hair.\n3. Rinse thoroughly.\n4. Use regularly for best results.",
        img: Hensam3
    }
];
