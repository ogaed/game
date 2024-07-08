// screens/QuizScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const questionsData = {
    "levels": [
      {
        "level": 1,
        "category": "Bones",
        "questions": [
          {
            "question": "How many bones are in the adult human body?",
            "answer": "206"
          },
          {
            "question": "What is the longest bone in the human body?",
            "answer": "Femur"
          },
          {
            "question": "Where is the smallest bone in the human body located?",
            "answer": "Ear"
          },
          {
            "question": "What part of the skeleton protects the brain?",
            "answer": "Skull"
          },
          {
            "question": "What is the main component of bones?",
            "answer": "Calcium"
          }
        ]
      },
      {
        "level": 2,
        "category": "Muscles",
        "questions": [
          {
            "question": "What is the strongest muscle in the human body based on its weight?",
            "answer": "Masseter"
          },
          {
            "question": "What muscle is primarily responsible for breathing?",
            "answer": "Diaphragm"
          },
          {
            "question": "What is the large muscle in the front of the thigh called?",
            "answer": "Quadriceps"
          },
          {
            "question": "Which muscle is known as the 'calf' muscle?",
            "answer": "Gastrocnemius"
          },
          {
            "question": "What muscle is located in the upper arm and is responsible for flexing the elbow?",
            "answer": "Biceps"
          }
        ]
      },
      {
        "level": 3,
        "category": "Neurons",
        "questions": [
          {
            "question": "What is the basic functional unit of the nervous system?",
            "answer": "Neuron"
          },
          {
            "question": "What part of the neuron receives signals?",
            "answer": "Dendrites"
          },
          {
            "question": "What is the long, threadlike part of a neuron that transmits signals called?",
            "answer": "Axon"
          },
          {
            "question": "What is the gap between two neurons where signals are transmitted called?",
            "answer": "Synapse"
          },
          {
            "question": "What substance insulates axons to speed up signal transmission?",
            "answer": "Myelin"
          }
        ]
      },
      {
        "level": 4,
        "category": "Whole Human Body",
        "questions": [
          {
            "question": "What is the largest organ in the human body?",
            "answer": "Skin"
          },
          {
            "question": "What system in the human body is responsible for transporting blood?",
            "answer": "Circulatory system"
          },
          {
            "question": "Which organ is responsible for pumping blood throughout the body?",
            "answer": "Heart"
          },
          {
            "question": "What organ is primarily responsible for detoxification in the body?",
            "answer": "Liver"
          },
          {
            "question": "What is the primary function of the lungs?",
            "answer": "Gas exchange (oxygen and carbon dioxide)"
          }
        ]
      },
      {
        "level": 5,
        "category": "Digestive System",
        "questions": [
          {
            "question": "Where does digestion begin?",
            "answer": "Mouth"
          },
          {
            "question": "What organ is primarily responsible for absorbing nutrients from food?",
            "answer": "Small intestine"
          },
          {
            "question": "What acid is found in the stomach?",
            "answer": "Hydrochloric acid"
          },
          {
            "question": "What is the largest internal organ in the human body?",
            "answer": "Liver"
          },
          {
            "question": "What is the function of the gallbladder?",
            "answer": "Store and concentrate bile"
          }
        ]
      },
      {
        "level": 6,
        "category": "Respiratory System",
        "questions": [
          {
            "question": "What is the main function of the respiratory system?",
            "answer": "Gas exchange"
          },
          {
            "question": "What is the name of the windpipe?",
            "answer": "Trachea"
          },
          {
            "question": "What are the tiny air sacs in the lungs called?",
            "answer": "Alveoli"
          },
          {
            "question": "Which muscle helps in breathing by contracting and relaxing?",
            "answer": "Diaphragm"
          },
          {
            "question": "What is the common name for the larynx?",
            "answer": "Voice box"
          }
        ]
      },
      {
        "level": 7,
        "category": "Circulatory System",
        "questions": [
          {
            "question": "What type of blood vessel carries blood away from the heart?",
            "answer": "Arteries"
          },
          {
            "question": "What is the main artery that carries blood from the heart to the rest of the body?",
            "answer": "Aorta"
          },
          {
            "question": "What type of blood vessel carries blood back to the heart?",
            "answer": "Veins"
          },
          {
            "question": "What are the small blood vessels where gas exchange occurs called?",
            "answer": "Capillaries"
          },
          {
            "question": "What is the liquid part of blood called?",
            "answer": "Plasma"
          }
        ]
      },
      {
        "level": 8,
        "category": "Immune System",
        "questions": [
          {
            "question": "What is the main function of the immune system?",
            "answer": "To protect the body from disease"
          },
          {
            "question": "What are the cells that recognize and attack pathogens called?",
            "answer": "White blood cells"
          },
          {
            "question": "What is the name of the protein that helps to neutralize pathogens?",
            "answer": "Antibody"
          },
          {
            "question": "What organ in the immune system filters blood and helps fight infections?",
            "answer": "Spleen"
          },
          {
            "question": "What is the term for the body's response to injury or infection?",
            "answer": "Inflammation"
          }
        ]
      },
      {
        "level": 9,
        "category": "Endocrine System",
        "questions": [
          {
            "question": "What is the main function of the endocrine system?",
            "answer": "To produce and secrete hormones"
          },
          {
            "question": "What gland is known as the 'master gland'?",
            "answer": "Pituitary gland"
          },
          {
            "question": "What hormone regulates blood sugar levels?",
            "answer": "Insulin"
          },
          {
            "question": "What gland produces adrenaline?",
            "answer": "Adrenal gland"
          },
          {
            "question": "What hormone is responsible for regulating metabolism?",
            "answer": "Thyroxine"
          }
        ]
      },
      {
        "level": 10,
        "category": "Nervous System",
        "questions": [
          {
            "question": "What is the main function of the nervous system?",
            "answer": "To control and coordinate body activities"
          },
          {
            "question": "What are the two main parts of the nervous system?",
            "answer": "Central and peripheral"
          },
          {
            "question": "What is the main control center of the nervous system?",
            "answer": "Brain"
          },
          {
            "question": "What part of the nervous system controls involuntary actions?",
            "answer": "Autonomic nervous system"
          },
          {
            "question": "What is the function of the spinal cord?",
            "answer": "To transmit signals between the brain and the body"
          }
        ]
      },
      {
        "level": 11,
        "category": "Skeletal System",
        "questions": [
          {
            "question": "What is the function of the skeletal system?",
            "answer": "To provide structure and support"
          },
          {
            "question": "What is the name of the bone in the upper arm?",
            "answer": "Humerus"
          },
          {
            "question": "What is the term for the junction between two bones?",
            "answer": "Joint"
          },
          {
            "question": "What type of bone is the vertebrae classified as?",
            "answer": "Irregular bone"
          },
          {
            "question": "What is the tough, fibrous tissue that covers the bone called?",
            "answer": "Periosteum"
          }
        ]
      },
      {
        "level": 12,
        "category": "Muscular System",
        "questions": [
          {
            "question": "What is the function of the muscular system?",
            "answer": "To allow movement"
          },
          {
            "question": "What type of muscle is found in the heart?",
            "answer": "Cardiac muscle"
          },
          {
            "question": "What type of muscle is attached to bones and helps in movement?",
            "answer": "Skeletal muscle"
          },
          {
            "question": "What is the term for muscle contraction without movement?",
            "answer": "Isometric"
          },
          {
            "question": "What is the term for muscle contraction with movement?",
            "answer": "Isotonic"
          }
        ]
      },
      {
        "level": 13,
        "category": "Integumentary System",
        "questions": [
          {
            "question": "What is the main function of the integumentary system?",
            "answer": "To protect the body from external damage"
          },
          {
            "question": "What is the outermost layer of skin called?",
            "answer": "Epidermis"
          },
          {
            "question": "What protein in the skin provides strength and flexibility?",
            "answer": "Collagen"
          },
          {
            "question": "What pigment in the skin provides color?",
            "answer": "Melanin"
          },
          {
            "question": "What gland produces oil to keep the skin moisturized?",
            "answer": "Sebaceous gland"
          }
        ]
      },
      {
        "level": 14,
        "category": "Reproductive System",
        "questions": [
          {
            "question": "What is the main function of the reproductive system?",
            "answer": "To produce offspring"
          },
          {
            "question": "What are the male sex cells called?",
            "answer": "Sperm"
          },
          {
            "question": "What is the female reproductive cell called?",
            "answer": "Egg (ovum)"
          },
          {
            "question": "What is the name of the female reproductive organ where a fetus develops?",
            "answer": "Uterus"
          },
          {
            "question": "What is the process by which sperm joins an egg?",
            "answer": "Fertilization"
          }
        ]
      },
      {
        "level": 15,
        "category": "Ear",
        "questions": [
          {
            "question": "What are the three smallest bones in the human body called?",
            "answer": "Ossicles"
          },
          {
            "question": "What is the spiral-shaped organ of hearing and balance called?",
            "answer": "Cochlea"
          },
          {
            "question": "What is the tube that connects the middle ear to the throat called?",
            "answer": "Eustachian tube"
          },
          {
            "question": "What is the visible part of the outer ear called?",
            "answer": "Pinna"
          },
          {
            "question": "What membrane separates the outer ear from the middle ear?",
            "answer": "Tympanic membrane (eardrum)"
          }
        ]
      },
      {
        "level": 16,
        "category": "Eye",
        "questions": [
          {
            "question": "What is the colored part of the eye that regulates the amount of light entering?",
            "answer": "Iris"
          },
          {
            "question": "What part of the eye focuses light onto the retina?",
            "answer": "Lens"
          },
          {
            "question": "What is the sensitive tissue layer lining the inner surface of the eye?",
            "answer": "Retina"
          },
          {
            "question": "What is the transparent front part of the eye covering the iris and pupil?",
            "answer": "Cornea"
          },
          {
            "question": "What is the hole in the center of the iris called?",
            "answer": "Pupil"
          }
        ]
      },
      {
        "level": 17,
        "category": "Brain",
        "questions": [
          {
            "question": "What are the two hemispheres of the brain connected by?",
            "answer": "Corpus callosum"
          },
          {
            "question": "What part of the brain controls balance and coordination?",
            "answer": "Cerebellum"
          },
          {
            "question": "What part of the brain is responsible for regulating vital functions like breathing and heart rate?",
            "answer": "Brainstem"
          },
          {
            "question": "What is the outer layer of the cerebrum called?",
            "answer": "Cerebral cortex"
          },
          {
            "question": "What is the structure that connects the brain to the spinal cord?",
            "answer": "Brainstem"
          }
        ]
      },
      {
        "level": 18,
        "category": "Teeth",
        "questions": [
          {
            "question": "What is the hardest substance in the human body?",
            "answer": "Tooth enamel"
          },
          {
            "question": "What is the term for a tooth's roots and crown?",
            "answer": "Dentin"
          },
          {
            "question": "What is the space within a tooth that contains nerves and blood vessels?",
            "answer": "Pulp"
          },
          {
            "question": "What is the connective tissue that attaches a tooth to the jaw?",
            "answer": "Periodontal ligament"
          },
          {
            "question": "What is the process of shedding primary teeth and replacing them with permanent teeth called?",
            "answer": "Tooth eruption"
          }
        ]
      },
      {
        "level": 19,
        "category": "Skin",
        "questions": [
          {
            "question": "What is the skin's natural, oily substance that keeps it moisturized?",
            "answer": "Sebum"
          },
          {
            "question": "What are the small openings in the skin that secrete sweat?",
            "answer": "Pores"
          },
          {
            "question": "What is the layer of fat beneath the skin that helps insulate the body?",
            "answer": "Subcutaneous fat"
          },
          {
            "question": "What is the term for the outermost layer of the skin that continually sheds and renews itself?",
            "answer": "Stratum corneum"
          },
          {
            "question": "What is the pigment responsible for the skin's color?",
            "answer": "Melanin"
          }
        ]
      },
      {
        "level": 20,
        "category": "Kidneys",
        "questions": [
          {
            "question": "What is the main function of the kidneys?",
            "answer": "To filter blood and produce urine"
          },
          {
            "question": "What are the tiny filtering units of the kidneys called?",
            "answer": "Nephrons"
          },
          {
            "question": "What is the term for the tube that carries urine from the kidney to the bladder?",
            "answer": "Ureter"
          },
          {
            "question": "What is the process of removing waste products from the blood called?",
            "answer": "Filtration"
          },
          {
            "question": "What hormone produced by the kidneys stimulates red blood cell production?",
            "answer": "Erythropoietin"
          }
        ]
      },
      {
        "level": 21,
        "category": "Liver",
        "questions": [
          {
            "question": "What is the main function of the liver?",
            "answer": "To detoxify the blood and metabolize nutrients"
          },
          {
            "question": "What is the name of the digestive juice produced by the liver?",
            "answer": "Bile"
          },
          {
            "question": "What is the condition characterized by yellowing of the skin and eyes due to liver problems?",
            "answer": "Jaundice"
          },
          {
            "question": "What organ stores excess glucose in the form of glycogen?",
            "answer": "Liver"
          },
          {
            "question": "What is the process of breaking down fats into fatty acids and glycerol in the liver?",
            "answer": "Lipid metabolism"
          }
        ]
      },
      {
        "level": 22,
        "category": "Heart",
        "questions": [
          {
            "question": "What is the main function of the heart?",
            "answer": "To pump blood throughout the body"
          },
          {
            "question": "What are the upper chambers of the heart called?",
            "answer": "Atria"
          },
          {
            "question": "What are the lower chambers of the heart called?",
            "answer": "Ventricles"
          },
          {
            "question": "What is the term for the contraction phase of the heart?",
            "answer": "Systole"
          },
          {
            "question": "What is the term for the relaxation phase of the heart?",
            "answer": "Diastole"
          }
        ]
      },
      {
        "level": 23,
        "category": "Stomach",
        "questions": [
          {
            "question": "What is the main function of the stomach?",
            "answer": "To break down and digest food"
          },
          {
            "question": "What is the strong acid produced by the stomach to aid in digestion?",
            "answer": "Hydrochloric acid"
          },
          {
            "question": "What is the term for the muscular contractions that move food through the digestive tract?",
            "answer": "Peristalsis"
          },
          {
            "question": "What is the gland in the stomach lining that produces digestive enzymes?",
            "answer": "Gastric gland"
          },
          {
            "question": "What is the term for the partially digested food mixture in the stomach?",
            "answer": "Chyme"
          }
        ]
      },
      {
        "level": 24,
        "category": "Pancreas",
        "questions": [
          {
            "question": "What is the main function of the pancreas?",
            "answer": "To produce digestive enzymes and insulin"
          },
          {
            "question": "What hormone regulates blood sugar levels produced by the pancreas?",
            "answer": "Insulin"
          },
          {
            "question": "What is the name of the small duct that carries digestive enzymes from the pancreas to the small intestine?",
            "answer": "Pancreatic duct"
          },
          {
            "question": "What is the enzyme produced by the pancreas that breaks down carbohydrates?",
            "answer": "Amylase"
          },
          {
            "question": "What is the term for inflammation of the pancreas?",
            "answer": "Pancreatitis"
          }
        ]
      },
      {
        "level": 25,
        "category": "Bladder",
        "questions": [
          {
            "question": "What is the main function of the bladder?",
            "answer": "To store urine"
          },
          {
            "question": "What is the tube that carries urine from the bladder to outside the body called?",
            "answer": "Urethra"
          },
          {
            "question": "What is the involuntary muscle that controls the opening and closing of the bladder?",
            "answer": "Sphincter"
          },
          {
            "question": "What is the process of expelling urine from the bladder called?",
            "answer": "Micturition (urination)"
          },
          {
            "question": "What is the term for the need to urinate urgently?",
            "answer": "Urinary urgency"
          }
        ]
      },
      {
        "level": 26,
        "category": "Thyroid Gland",
        "questions": [
          {
            "question": "What is the main function of the thyroid gland?",
            "answer": "To regulate metabolism"
          },
          {
            "question": "What hormone does the thyroid gland produce?",
            "answer": "Thyroxine (T4)"
          },
          {
            "question": "What is the condition caused by an overactive thyroid gland?",
            "answer": "Hyperthyroidism"
          },
          {
            "question": "What is the condition caused by an underactive thyroid gland?",
            "answer": "Hypothyroidism"
          },
          {
            "question": "What is the small, butterfly-shaped gland located in the neck?",
            "answer": "Thyroid gland"
          }
        ]
      },
      {
        "level": 27,
        "category": "Adrenal Glands",
        "questions": [
          {
            "question": "What is the main function of the adrenal glands?",
            "answer": "To produce hormones like adrenaline and cortisol"
          },
          {
            "question": "What hormone is released by the adrenal glands in response to stress?",
            "answer": "Adrenaline (epinephrine)"
          },
          {
            "question": "What is the condition caused by overproduction of cortisol by the adrenal glands?",
            "answer": "Cushing's syndrome"
          },
          {
            "question": "What are the two parts of the adrenal glands that produce different hormones?",
            "answer": "Adrenal cortex and adrenal medulla"
          },
          {
            "question": "What gland is located on top of each kidney?",
            "answer": "Adrenal glands"
          }
        ]
      },
      {
        "level": 28,
        "category": "Hormones",
        "questions": [
          {
            "question": "What are hormones?",
            "answer": "Chemical messengers that regulate body functions"
          },
          {
            "question": "What hormone regulates blood sugar levels?",
            "answer": "Insulin"
          },
          {
            "question": "What hormone is responsible for the fight-or-flight response?",
            "answer": "Adrenaline"
          },
          {
            "question": "What hormone regulates sleep-wake cycles?",
            "answer": "Melatonin"
          },
          {
            "question": "What hormone stimulates milk production in the breasts?",
            "answer": "Prolactin"
          }
        ]
      },
      {
        "level": 29,
        "category": "Lymphatic System",
        "questions": [
          {
            "question": "What is the main function of the lymphatic system?",
            "answer": "To help fight infection and drain excess fluid from tissues"
          },
          {
            "question": "What are the small, bean-shaped organs that filter lymph called?",
            "answer": "Lymph nodes"
          },
          {
            "question": "What is the clear fluid that circulates throughout the lymphatic system?",
            "answer": "Lymph"
          },
          {
            "question": "What is the largest lymphatic organ in the body?",
            "answer": "Spleen"
          },
          {
            "question": "What is the term for the process of engulfing and digesting pathogens by immune cells?",
            "answer": "Phagocytosis"
          }
        ]
      },
      {
        "level": 30,
        "category": "Endoplasmic Reticulum",
        "questions": [
          {
            "question": "What is the function of the endoplasmic reticulum?",
            "answer": "To transport proteins and synthesize lipids"
          },
          {
            "question": "What are the two types of endoplasmic reticulum?",
            "answer": "Rough ER and smooth ER"
          },
          {
            "question": "Which type of endoplasmic reticulum has ribosomes attached to its surface?",
            "answer": "Rough ER"
          },
          {
            "question": "What is the term for the process of packaging proteins in the Golgi apparatus?",
            "answer": "Glycosylation"
          },
          {
            "question": "What is the flattened membrane sac in the cytoplasm that processes and packages proteins?",
            "answer": "Golgi apparatus"
          }
        ]
      },
      {
        "level": 31,
        "category": "Proteins",
        "questions": [
          {
            "question": "What are proteins?",
            "answer": "Large molecules made up of amino acids"
          },
          {
            "question": "What is the term for the specific sequence of amino acids that make up a protein?",
            "answer": "Primary structure"
          },
          {
            "question": "What is the term for the folding of a protein into a specific three-dimensional shape?",
            "answer": "Tertiary structure"
          },
          {
            "question": "What are proteins that act as biological catalysts called?",
            "answer": "Enzymes"
          },
          {
            "question": "What is the name for the building blocks of proteins?",
            "answer": "Amino acids"
          }
        ]
      },
      {
        "level": 32,
        "category": "Mitochondria",
        "questions": [
          {
            "question": "What is the function of mitochondria?",
            "answer": "To generate energy for the cell"
          },
          {
            "question": "What is the term for the process of generating energy in mitochondria?",
            "answer": "Cellular respiration"
          },
          {
            "question": "What is the powerhouse of the cell?",
            "answer": "Mitochondria"
          },
          {
            "question": "What is the outer membrane of mitochondria called?",
            "answer": "Outer mitochondrial membrane"
          },
          {
            "question": "What is the inner membrane of mitochondria called?",
            "answer": "Inner mitochondrial membrane"
          }
        ]
      },
      {
        "level": 33,
        "category": "Cell Membrane",
        "questions": [
          {
            "question": "What is the function of the cell membrane?",
            "answer": "To control what enters and exits the cell"
          },
          {
            "question": "What is the cell membrane primarily composed of?",
            "answer": "Phospholipids"
          },
          {
            "question": "What is the term for the movement of molecules from an area of high concentration to an area of low concentration?",
            "answer": "Diffusion"
          },
          {
            "question": "What is the process of engulfing large particles into the cell membrane?",
            "answer": "Endocytosis"
          },
          {
            "question": "What is the term for the process of expelling waste or large molecules from the cell?",
            "answer": "Exocytosis"
          }
        ]
      },
      {
        "level": 34,
        "category": "Cell Nucleus",
        "questions": [
          {
            "question": "What is the function of the cell nucleus?",
            "answer": "To control cell activities and store genetic material"
          },
          {
            "question": "What is the genetic material found inside the nucleus?",
            "answer": "DNA"
          },
          {
            "question": "What is the structure within the nucleus that synthesizes ribosomes?",
            "answer": "Nucleolus"
          },
          {
            "question": "What is the term for the process of copying DNA to make mRNA?",
            "answer": "Transcription"
          },
          {
            "question": "What is the process of synthesizing proteins using mRNA and ribosomes?",
            "answer": "Translation"
          }
        ]
      },
      {
        "level": 35,
        "category": "RNA",
        "questions": [
          {
            "question": "What is RNA?",
            "answer": "Ribonucleic acid that plays a role in protein synthesis"
          },
          {
            "question": "What is the type of RNA that carries instructions from DNA to ribosomes?",
            "answer": "Messenger RNA (mRNA)"
          },
          {
            "question": "What is the type of RNA that transfers amino acids to the ribosome during protein synthesis?",
            "answer": "Transfer RNA (tRNA)"
          },
          {
            "question": "What is the type of RNA that forms part of the structure of ribosomes?",
            "answer": "Ribosomal RNA (rRNA)"
          },
          {
            "question": "What is the process of copying DNA to make RNA?",
            "answer": "Transcription"
          }
        ]
      },
      {
        "level": 36,
        "category": "DNA",
        "questions": [
          {
            "question": "What is DNA?",
            "answer": "Deoxyribonucleic acid that carries genetic information"
          },
          {
            "question": "What are the building blocks of DNA?",
            "answer": "Nucleotides"
          },
          {
            "question": "What are the four nitrogenous bases found in DNA?",
            "answer": "Adenine, Thymine, Guanine, Cytosine"
          },
          {
            "question": "What is the term for the shape of the DNA molecule?",
            "answer": "Double helix"
          },
          {
            "question": "What is the process of making an exact copy of DNA?",
            "answer": "DNA replication"
          }
        ]
      },
      {
        "level": 37,
        "category": "Genes",
        "questions": [
          {
            "question": "What are genes?",
            "answer": "Segments of DNA that code for specific proteins"
          },
          {
            "question": "What is the term for different forms of a gene?",
            "answer": "Alleles"
          },
          {
            "question": "What is the term for the combination of alleles an individual has for a particular trait?",
            "answer": "Genotype"
          },
          {
            "question": "What is the term for the physical expression of genes?",
            "answer": "Phenotype"
          },
          {
            "question": "What is the branch of biology that studies genes and heredity?",
            "answer": "Genetics"
          }
        ]
      },
      {
        "level": 38,
        "category": "Chromosomes",
        "questions": [
          {
            "question": "What are chromosomes?",
            "answer": "Thread-like structures made of DNA and proteins"
          },
          {
            "question": "How many pairs of chromosomes do humans have?",
            "answer": "23 pairs"
          },
          {
            "question": "What is the term for the cell division process that produces gametes?",
            "answer": "Meiosis"
          },
          {
            "question": "What is the term for the process of cell division that produces two identical daughter cells?",
            "answer": "Mitosis"
          },
          {
            "question": "What is the name of the sex chromosomes in humans?",
            "answer": "X and Y chromosomes"
          }
        ]
      },
      {
        "level": 39,
        "category": "Evolution",
        "questions": [
          {
            "question": "What is evolution?",
            "answer": "The process of change in living organisms over generations"
          },
          {
            "question": "Who proposed the theory of evolution by natural selection?",
            "answer": "Charles Darwin"
          },
          {
            "question": "What is the term for the process of evolution that occurs when individuals with advantageous traits survive and reproduce?",
            "answer": "Natural selection"
          },
          {
            "question": "What is the term for similarities in body structures due to shared ancestry?",
            "answer": "Homology"
          },
          {
            "question": "What is the study of the geographic distribution of species called?",
            "answer": "Biogeography"
          }
        ]
      },
      {
        "level": 40,
        "category": "Ecology",
        "questions": [
          {
            "question": "What is ecology?",
            "answer": "The study of the interactions between organisms and their environment"
          },
          {
            "question": "What is the term for a group of interacting organisms in a specific area?",
            "answer": "Community"
          },
          {
            "question": "What is the term for all the populations of different species that live in a particular place?",
            "answer": "Ecosystem"
          },
          {
            "question": "What is the study of the movement of energy and nutrients through ecosystems?",
            "answer": "Ecological dynamics"
          },
          {
            "question": "What is the study of the distribution of organisms called?",
            "answer": "Biogeography"
          }
        ]
      },
       {
        "level": 41,
        "category": "Respiratory System",
        "questions": [
          {
            "question": "What is the main function of the respiratory system?",
            "answer": "To facilitate gas exchange (oxygen and carbon dioxide) between the body and the environment"
          },
          {
            "question": "What are the tiny air sacs in the lungs where gas exchange occurs called?",
            "answer": "Alveoli"
          },
          {
            "question": "What is the term for the process of inhaling and exhaling air?",
            "answer": "Ventilation"
          },
          {
            "question": "What is the large muscle below the lungs that contracts and relaxes to help with breathing?",
            "answer": "Diaphragm"
          },
          {
            "question": "What is the windpipe called?",
            "answer": "Trachea"
          }
        ]
      },
      {
        "level": 42,
        "category": "Nervous System",
        "questions": [
          {
            "question": "What is the main function of the nervous system?",
            "answer": "To transmit signals between different parts of the body"
          },
          {
            "question": "What are the cells that transmit electrical signals in the nervous system called?",
            "answer": "Neurons"
          },
          {
            "question": "What is the fatty substance that surrounds and insulates neurons?",
            "answer": "Myelin"
          },
          {
            "question": "What is the junction between two neurons where signals are transmitted called?",
            "answer": "Synapse"
          },
          {
            "question": "What is the largest part of the human brain called?",
            "answer": "Cerebrum"
          }
        ]
      },
      {
        "level": 43,
        "category": "Immune System",
        "questions": [
          {
            "question": "What is the main function of the immune system?",
            "answer": "To protect the body from infections and diseases"
          },
          {
            "question": "What are the white blood cells that engulf and digest pathogens called?",
            "answer": "Macrophages"
          },
          {
            "question": "What are the proteins produced by the immune system to neutralize pathogens called?",
            "answer": "Antibodies"
          },
          {
            "question": "What is the term for the body's ability to resist a particular infection or toxin?",
            "answer": "Immunity"
          },
          {
            "question": "What are the lymphoid organs where immune cells mature and proliferate called?",
            "answer": "Lymph nodes"
          }
        ]
      },
      {
        "level": 44,
        "category": "Digestive System",
        "questions": [
          {
            "question": "What is the main function of the digestive system?",
            "answer": "To break down food and absorb nutrients"
          },
          {
            "question": "What is the longest part of the digestive tract where most digestion and nutrient absorption occurs?",
            "answer": "Small intestine"
          },
          {
            "question": "What is the term for the process of breaking down food into smaller molecules?",
            "answer": "Digestion"
          },
          {
            "question": "What is the largest gland in the human body that produces bile?",
            "answer": "Liver"
          },
          {
            "question": "What is the term for the semi-solid waste products of digestion?",
            "answer": "Feces"
          }
        ]
      },
      {
        "level": 45,
        "category": "Endocrine System",
        "questions": [
          {
            "question": "What is the main function of the endocrine system?",
            "answer": "To regulate body functions using hormones"
          },
          {
            "question": "What is the master gland that controls other endocrine glands?",
            "answer": "Pituitary gland"
          },
          {
            "question": "What is the hormone produced by the pancreas that regulates blood sugar levels?",
            "answer": "Insulin"
          },
          {
            "question": "What gland regulates metabolism and calcium levels?",
            "answer": "Thyroid gland"
          },
          {
            "question": "What hormone is responsible for fight-or-flight response?",
            "answer": "Adrenaline"
          }
        ]
      },
      {
        "level": 46,
        "category": "Reproductive System",
        "questions": [
          {
            "question": "What is the main function of the reproductive system?",
            "answer": "To produce offspring"
          },
          {
            "question": "What are the male reproductive cells called?",
            "answer": "Sperm"
          },
          {
            "question": "What is the female reproductive cell called?",
            "answer": "Egg (ovum)"
          },
          {
            "question": "What is the hormone responsible for secondary sexual characteristics in males?",
            "answer": "Testosterone"
          },
          {
            "question": "What is the process of releasing an egg from the ovary called?",
            "answer": "Ovulation"
          }
        ]
      },
      {
        "level": 47,
        "category": "Muscular System",
        "questions": [
          {
            "question": "What is the main function of the muscular system?",
            "answer": "To facilitate movement and maintain posture"
          },
          {
            "question": "What are the three types of muscles in the human body?",
            "answer": "Skeletal, smooth, and cardiac muscles"
          },
          {
            "question": "What type of muscle is found in the walls of blood vessels?",
            "answer": "Smooth muscle"
          },
          {
            "question": "What is the term for the attachment point of a muscle to a bone that moves?",
            "answer": "Insertion"
          },
          {
            "question": "What is the term for muscle contraction without movement?",
            "answer": "Isometric"
          }
        ]
      },
      {
        "level": 48,
        "category": "Skeletal System",
        "questions": [
          {
            "question": "What is the main function of the skeletal system?",
            "answer": "To provide structure, support, and protection to the body"
          },
          {
            "question": "What is the hardest substance in the human body?",
            "answer": "Tooth enamel"
          },
          {
            "question": "What are the bones that make up the spine called?",
            "answer": "Vertebrae"
          },
          {
            "question": "What is the bone in the upper arm between the shoulder and elbow called?",
            "answer": "Humerus"
          },
          {
            "question": "What are the joints that allow movement in only one plane called?",
            "answer": "Hinge joints"
          }
        ]
      },
      {
        "level": 49,
        "category": "Cardiovascular System",
        "questions": [
          {
            "question": "What is the main function of the cardiovascular system?",
            "answer": "To transport nutrients, oxygen, and hormones to cells throughout the body"
          },
          {
            "question": "What is the largest artery in the human body?",
            "answer": "Aorta"
          },
          {
            "question": "What is the term for the contraction phase of the heart?",
            "answer": "Systole"
          },
          {
            "question": "What is the process of blood clotting to prevent blood loss?",
            "answer": "Coagulation"
          },
          {
            "question": "What is the term for the liquid part of blood that contains nutrients and wastes?",
            "answer": "Plasma"
          }
        ]
      },
      {
        "level": 50,
        "category": "Integumentary System",
        "questions": [
          {
            "question": "What is the main function of the integumentary system?",
            "answer": "To protect the body from external damage and regulate temperature"
          },
          {
            "question": "What is the outermost layer of the skin called?",
            "answer": "Epidermis"
          },
          {
            "question": "What is the pigment responsible for the color of skin?",
            "answer": "Melanin"
          },
          {
            "question": "What are the glands in the skin that produce sweat?",
            "answer": "Sweat glands"
          },
          {
            "question": "What is the fibrous protein that gives skin its elasticity?",
            "answer": "Collagen"
          }
        ]
      }
    ]
  };
  

export default function QuizScreen() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(0);
  const [hints, setHints] = useState(3);
  const [trials, setTrials] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  const level = questionsData.levels[currentLevel];
  const question = level.questions[currentQuestion];

  const handleAnswer = () => {
    if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
      if (hintUsed) {
        setScore(score + 5);
        setCoins(coins + 5);
      } else {
        setScore(score + 10 - trials);
        setCoins(coins + 10);
      }
     
      setCurrentQuestion(currentQuestion + 1);
      setHintUsed(false);
      setTrials(0);
    } else {
      setTrials(trials + 1);
    }

    if (trials >= 2) {
      alert(`Answer: ${question.answer}`);
      setTrials(0);
      setHints(hints > 0 ? hints - 1 : 0);
    }

    if (currentQuestion >= level.questions.length - 1) {
      setCurrentLevel(currentLevel + 1);
      setCurrentQuestion(0);
    }
    setUserAnswer('');
  };

  const getHint = () => {
    if (hints > 0 && coins >= 8) {
      alert(`Hint: The answer is ${question.answer}`);
      setHints(hints - 1);
      setCoins(coins - 8);
      setHintUsed(true);
    } else if (coins < 8) {
      alert('Not enough coins to use a hint');
    } else {
      alert('No more hints available');
    }
  };

  const goToNextLevel = () => {
    setCurrentLevel(currentLevel + 1);
    setCurrentQuestion(0);
  };

  return (
    <View style={styles.container}>
      {currentLevel < questionsData.levels.length ? (
        <>
          <Text style={styles.title}>Level {level.level}: {level.category}</Text>
          <Text style={styles.question}>{question.question}</Text>
          <TextInput
            style={styles.input}
            placeholder="Type your answer here"
            value={userAnswer}
            onChangeText={setUserAnswer}
          />
          <Button title="Submit Answer" onPress={handleAnswer} />
          <Button title="Show Hint" onPress={getHint} />
          <Text style={styles.trials}>Trials: {trials}/3</Text>
          <Text style={styles.coins}>Coins: {coins}</Text>
        </>
      ) : (
        <>
          <Text style={styles.score}>Your total score: {score}</Text>
          {currentLevel < questionsData.levels.length - 1 ? (
            <Button title="Next Level" onPress={goToNextLevel} />
          ) : (
            <Text style={styles.completed}>Congratulations! You've completed all levels!</Text>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    width: '80%',
  },
  trials: {
    fontSize: 18,
    marginTop: 20,
  },
  score: {
    fontSize: 24,
  },
  coins: {
    fontSize: 18,
    marginTop: 20,
  },
  completed: {
    fontSize: 24,
    marginTop: 20,
  },
});
