document.addEventListener('contextmenu', event => event.preventDefault());

geometry({name: 'sphere', type: 'sphere'});
geometry({name: 'box', type: 'box'});

texture({name: 'wood_texture', path: 'https://cdn.shopify.com/s/files/1/0324/1709/products/YNO_d806b4cf-5497-475c-9afc-7e091580e6f3_1024x.jpeg?v=1571629949'});
texture({name: 'wood_floor', path: 'https://res.cloudinary.com/dexin8o58/image/upload/v1675404737/brown-wood_hyhiiv.jpg', repeat_u: 17});
texture({name: 'wall_texture', path: 'https://4.bp.blogspot.com/-5xNMmxVjWKg/UA5bNp_0jaI/AAAAAAAAB4s/QXcwBUUPPKw/s1600/Seamless+wall+white+paint+stucco+plaster+texture.jpg', repeat_u: 7, repeat_v: 5});
texture({name: 'ceiling_texture', path: 'https://4.bp.blogspot.com/-5xNMmxVjWKg/UA5bNp_0jaI/AAAAAAAAB4s/QXcwBUUPPKw/s1600/Seamless+wall+white+paint+stucco+plaster+texture.jpg', repeat_u: 40, repeat_v: 7});
texture({name: 'watermelon_pattern', path: 'https://res.cloudinary.com/dexin8o58/image/upload/v1676164224/3f1a98af5af8b34f3a77591cdcd79125_a78nyo.png'});
texture({name: 'flowers_pattern', path: 'https://res.cloudinary.com/dexin8o58/image/upload/v1676161702/Pattern-in-Art_o3vgz5.jpg'});
texture({name: 'calendar_texture', path: 'https://res.cloudinary.com/dexin8o58/image/upload/v1676192498/9b702fa4f6473d5d46b25891f14a790a_nnx3rz.jpg'});
texture({name: 'contact_texture', path: 'https://res.cloudinary.com/dexin8o58/image/upload/v1676193339/contact-form_xqowyf.avif'});

material({ name: 'wood', type: 'standard', map: wood_texture});
material({ name: 'wood_floor', type: 'physical', map: wood_floor, roughness: 0});
material({ name: 'wall', type: 'standard', map: wall_texture});
material({ name: 'ceiling', type: 'standard', map: ceiling_texture});
material({ name: 'watermelon', type: 'standard', map: watermelon_pattern});
material({ name: 'flowers', type: 'standard', map: flowers_pattern});
material({ name: 'calendar', type: 'standard', map: calendar_texture});
material({ name: 'contact', type: 'standard', map: contact_texture});

material({ name: 'blue', type: 'standard', color: 'blue' });
material({ name: 'black', type: 'standard', color: 'black' });
material({ name: 'beige', type: 'standard', color: 'beige', side: 2 });
material({ name: 'maroon', type: 'standard', color: 0x57232f });
material({ name: 'mediumvioletred', type: 'standard', color: 'mediumvioletred' });

material({ name: 'skin', roughness: 0, transmission: 0.5, type: 'physical', color: 0xF8CBA6 });
material({ name: 'skin_transparent', roughness: 0.5, type: 'standard', color: 0xF8CBA6, transparent: true, opacity: 0.5 });
