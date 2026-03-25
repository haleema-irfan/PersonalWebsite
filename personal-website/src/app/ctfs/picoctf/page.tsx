"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import BackgroundElements from "@/components/BackgroundElements";

function Tag({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 bg-[#B3EBF2]/20 text-[#B3EBF2] rounded-full text-sm">
      {label}
    </span>
  );
}

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto text-xs sm:text-sm text-gray-200 bg-[#1A202C] border border-gray-700/30 rounded-lg p-4">
      {children}
    </pre>
  );
}

function ChallengeCard({
  title,
  tags,
  children,
}: {
  title: string;
  tags: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-[#3C414A]/40 to-[#3C414A]/20 rounded-2xl p-6 border border-gray-700/20 hover:border-[#B3EBF2]/30 transition-all duration-300">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <details className="group">
        <summary className="cursor-pointer select-none font-semibold text-gray-300 hover:text-[#B3EBF2] transition-colors">
          Full writeup
          <span className="text-[#B3EBF2] group-open:hidden ml-2">+</span>
          <span className="text-[#B3EBF2] hidden group-open:inline ml-2">-</span>
        </summary>
        <div className="mt-4 text-gray-300 text-sm leading-relaxed space-y-4">
          {children}
        </div>
      </details>
    </div>
  );
}

export default function PicoCTFPage() {
  return (
    <div className="min-h-screen bg-[#1A202C] text-white">
      <Navigation />

      <section className="pt-24 pb-16 px-8 relative">
        <BackgroundElements />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="fade-down text-5xl lg:text-6xl font-bold mb-4">
              picoCTF
            </h1>
          </div>

          <div className="space-y-6 fade-down fade-down-delay-1">
            <ChallengeCard
              title="Riddle Registry"
              tags={["Metadata Analysis", "ExifTool", "Base64 Decoding", "PDF Forensics"]}
            >
                <p>
                  Thought process: find where the PDF could be tampered with.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Metadata</li>
                  <li>Hidden strings</li>
                </ul>
                <p>
                  For metadata I used ExifTool:
                </p>
                <CodeBlock>{`exiftool confidential.pdf`}</CodeBlock>
                <CodeBlock>{`ExifTool Version Number         : 13.50
File Name                       : confidential.pdf
Directory                       : .
File Size                       : 183 kB
File Modification Date/Time     : 2026:02:23 19:05:32+08:00
File Access Date/Time           : 2026:02:23 19:14:25+08:00
File Inode Change Date/Time     : 2026:02:23 19:10:39+08:00
File Permissions                : -rw-r--r--
File Type                       : PDF
File Type Extension             : pdf
MIME Type                       : application/pdf
PDF Version                     : 1.7
Linearized                      : No
Page Count                      : 1
Producer                        : PyPDF2
Author                          : cGljb0NURntwdXp6bDNkX20zdGFkYXRhX2YwdW5kIV8zNTc4NzM5YX0=`}</CodeBlock>
                <p>
                  I noticed the Author value looked like Base64 (padded with <code>=</code>), so I decoded it:
                </p>
                <CodeBlock>{`echo "cGljb0NURntwdXp6bDNkX20zdGFkYXRhX2YwdW5kIV8zNTc4NzM5YX0=" | base64 --decode`}</CodeBlock>
                <p>
                  This returned: <code className="text-[#B3EBF2]">picoCTF{"{puzzl3d_m3tadata_f0und!_3578739a}"}</code>
                </p>
            </ChallengeCard>

            <ChallengeCard
              title="Log Hunt"
              tags={["Log Analysis", "String Extraction", "grep", "Linux CLI"]}
            >
                <p>
                  First thought: search for <code>picoCTF</code> in logs.
                </p>
                <CodeBlock>{`strings server.log | grep picoCTF`}</CodeBlock>
                <CodeBlock>{`[1990-08-09 10:00:10] INFO FLAGPART: picoCTF{us3_
[1990-08-09 11:04:27] INFO FLAGPART: picoCTF{us3_
[1990-08-09 11:04:29] INFO FLAGPART: picoCTF{us3_
[1990-08-09 11:04:37] INFO FLAGPART: picoCTF{us3_
[1990-08-09 12:19:23] INFO FLAGPART: picoCTF{us3_
[1990-08-09 12:19:29] INFO FLAGPART: picoCTF{us3_
[1990-08-09 12:19:32] INFO FLAGPART: picoCTF{us3_`}</CodeBlock>
                <p>
                  That only gave me the start. Next I searched for the closing brace to get the end:
                </p>
                <CodeBlock>{`strings server.log | grep '}'`}</CodeBlock>
                <CodeBlock>{`[1990-08-09 10:10:54] INFO FLAGPART: cedfa5fb}
[1990-08-09 10:10:58] INFO FLAGPART: cedfa5fb}
[1990-08-09 10:11:06] INFO FLAGPART: cedfa5fb}
[1990-08-09 11:16:58] INFO FLAGPART: cedfa5fb}
[1990-08-09 11:16:59] INFO FLAGPART: cedfa5fb}
[1990-08-09 11:17:00] INFO FLAGPART: cedfa5fb}
[1990-08-09 12:28:45] INFO FLAGPART: cedfa5fb}
[1990-08-09 12:28:49] INFO FLAGPART: cedfa5fb}
[1990-08-09 12:28:52] INFO FLAGPART: cedfa5fb}`}</CodeBlock>
                <p>
                  Combining those gave <code>picoCTF{"{us3_cedfa5fb}"}</code>, which was wrong. I realized I was missing the middle in snake_case, so I searched for underscores:
                </p>
                <CodeBlock>{`strings server.log | grep '_'`}</CodeBlock>
                <CodeBlock>{`[1990-08-09 10:00:10] INFO FLAGPART: picoCTF{us3_
[1990-08-09 10:02:55] INFO FLAGPART: y0urlinux_
[1990-08-09 10:05:54] INFO FLAGPART: sk1lls_
[1990-08-09 10:05:55] INFO FLAGPART: sk1lls_
[1990-08-09 11:04:27] INFO FLAGPART: picoCTF{us3_
[1990-08-09 11:04:29] INFO FLAGPART: picoCTF{us3_
[1990-08-09 11:04:37] INFO FLAGPART: picoCTF{us3_
[1990-08-09 11:09:16] INFO FLAGPART: y0urlinux_
[1990-08-09 11:09:19] INFO FLAGPART: y0urlinux_
[1990-08-09 11:12:40] INFO FLAGPART: sk1lls_
[1990-08-09 11:12:45] INFO FLAGPART: sk1lls_
[1990-08-09 12:19:23] INFO FLAGPART: picoCTF{us3_
[1990-08-09 12:19:29] INFO FLAGPART: picoCTF{us3_
[1990-08-09 12:19:32] INFO FLAGPART: picoCTF{us3_
[1990-08-09 12:23:43] INFO FLAGPART: y0urlinux_
[1990-08-09 12:23:45] INFO FLAGPART: y0urlinux_
[1990-08-09 12:23:53] INFO FLAGPART: y0urlinux_
[1990-08-09 12:25:32] INFO FLAGPART: sk1lls_`}</CodeBlock>
                <p>
                  Using timestamps, I reconstructed:{" "}
                  <code className="text-[#B3EBF2]">picoCTF{"{us3_y0urlinux_sk1lls_cedfa5fb}"}</code>.
                </p>
                <p>
                  In hindsight, searching directly for <code>FLAGPART</code> would have been easier.
                </p>
            </ChallengeCard>

            <ChallengeCard
              title="Hidden In Plainsight"
              tags={["Steganography", "steghide", "Base64 Decoding", "File Analysis"]}
            >
                <p>
                  First, I verified the file type:
                </p>
                <CodeBlock>{`file img.jpg`}</CodeBlock>
                <CodeBlock>{`img.jpg: JPEG image data, JFIF standard 1.01, aspect ratio, density 1x1, segment length 16, comment: "c3RlZ2hpZGU6Y0VGNmVuZHZjbVE9", baseline, precision 8, 640x640, components 3`}</CodeBlock>
                <p>
                  The comment looked suspicious, so I decoded it:
                </p>
                <CodeBlock>{`echo "c3RlZ2hpZGU6Y0VGNmVuZHZjbVE9" | base64 --decode`}</CodeBlock>
                <CodeBlock>{`steghide:cEF6endvcmQ=`}</CodeBlock>
                <p>
                  That hinted at using <code>steghide</code>. I decoded the second Base64 string:
                </p>
                <CodeBlock>{`echo "cEF6endvcmQ=" | base64 --decode`}</CodeBlock>
                <CodeBlock>{`pAzzword`}</CodeBlock>
                <p>
                  I used it as the extraction password:
                </p>
                <CodeBlock>{`steghide extract -sf img.jpg -p pAzzword`}</CodeBlock>
                <p>
                  Recovered flag: <code className="text-[#B3EBF2]">picoCTF{"{h1dd3n_1n_1m4g3_1c55ccd0}"}</code>.
                </p>
                <p>
                  I also tried <code>binwalk</code>, but it returned nothing because this challenge hides encrypted data in pixels rather than embedded file signatures.
                </p>
            </ChallengeCard>

            <ChallengeCard
              title="Flag in Flame"
              tags={["Binary Analysis", "Hex Inspection", "File Carving", "Image Forensics"]}
            >
                <p>
                  I first checked if the file was really text:
                </p>
                <CodeBlock>{`file logs.txt`}</CodeBlock>
                <CodeBlock>{`logs.txt: ASCII text, with very long lines (65536), with no line terminators`}</CodeBlock>
                <p>
                  Searching for a direct flag string did not work:
                </p>
                <CodeBlock>{`strings logs.txt | grep picoCTF`}</CodeBlock>
                <p>
                  So I inspected raw bytes for hidden signatures:
                </p>
                <CodeBlock>{`hexdump -C logs.txt | head`}</CodeBlock>
                <CodeBlock>{`00000000  69 56 42 4f 52 77 30 4b  47 67 6f 41 41 41 41 4e  |iVBORw0KGgoAAAAN|
00000010  53 55 68 45 55 67 41 41  41 34 41 41 41 41 53 41  |SUhEUgAAA4AAAASA|
00000020  43 41 49 41 41 41 41 68  38 62 53 4f 41 41 45 41  |CAIAAAAh8bSOAAEA|
00000030  41 45 6c 45 51 56 52 34  6e 4f 7a 39 31 39 4d 73  |AElEQVR4nOz919Ms|
00000040  79 5a 55 6e 69 50 33 4f  63 59 2b 49 46 4a 2b 36  |yZUniP3OcY+IFJ+6|
00000050  6f 75 71 57 42 71 6f 61  75 74 44 59 52 6d 4e 36  |ouqWBqoautDYRmN6|
00000060  65 6d 66 61 5a 6d 6c 63  30 6d 69 32 2b 37 78 50  |emfaZmlc0mi2+7xP|
00000070  4e 4a 4a 2f 47 4a 2f 34  52 76 4a 74 48 35 64 6d  |NJJ/GJ/4RvJtH5dm|
00000080  51 31 76 62 48 75 34 4d  70 39 6b 7a 6a 51 59 47  |Q1vbHu4Mp9kzjQYG|
00000090  6f 68 75 6f 41 6b 72 68  31 74 57 66 79 73 79 49  |ohuoAkrh1tWfysyI|`}</CodeBlock>
                <p>
                  The starting bytes indicated a Base64-encoded PNG header. I decoded the file:
                </p>
                <CodeBlock>{`cat logs.txt | base64 --decode > discovered_image.png`}</CodeBlock>
                <p>
                  In the PNG, I found this hex sequence:
                </p>
                <CodeBlock>{`7069636F4354467B666F72656E736963735F616E616C797369735F69735F616D617A696E675F35636363376362307D`}</CodeBlock>
                <p>
                  It matched hex-byte characteristics (0-9, A-F, even length). Converting to ASCII:
                </p>
                <CodeBlock>{`echo "7069636F4354467B666F72656E736963735F616E616C797369735F69735F616D617A696E675F35636363376362307D" | xxd -r -p`}</CodeBlock>
                <p>
                  Final flag: <code className="text-[#B3EBF2]">picoCTF{"{forensics_analysis_is_amazing_5ccc7cb0}"}</code>.
                </p>
            </ChallengeCard>
          </div>

          <div className="text-center pt-10">
            <Link
              href="/ctfs"
              className="inline-flex items-center gap-2 nav-link text-lg text-white hover:text-[#B3EBF2] transition-colors"
            >
              ← Back to CTFs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

