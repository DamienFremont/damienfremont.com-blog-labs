package com.damienfremont.blog;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.util.Enumeration;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

import com.google.common.io.ByteStreams;
import com.google.common.io.Files;
import com.google.common.io.InputSupplier;
import com.google.common.io.OutputSupplier;
import com.google.common.io.Resources;

/**
 * @see http://grepcode.com/file/repo1.maven.org/maven2/net.code-story/simplelenium/1.21/net/codestory/simplelenium/driver/PhantomJsDownloader.java
 */
class PhantomJsDownloader {
	
	private final boolean isWindows;
	private final boolean isMac;
	private final boolean isLinux64;

	PhantomJsDownloader() {
		String osName = System.getProperty("os.name");
		isWindows = osName.startsWith("Windows");
		isMac = osName.startsWith("Mac OS X") || osName.startsWith("Darwin");
		isLinux64 = System.getProperty("sun.arch.data.model").equals("64");
	}

	public File downloadAndExtract() {
		File installDir = new File(".phantomjstest");
		String url;
		File phantomJsExe;
		if (isWindows) {
			url = "http://phantomjs.googlecode.com/files/phantomjs-1.9.2-windows.zip";
			phantomJsExe = new File(installDir,
					"phantomjs-1.9.2-windows/phantomjs.exe");
		} else if (isMac) {
			url = "http://phantomjs.googlecode.com/files/phantomjs-1.9.2-macosx.zip";
			phantomJsExe = new File(installDir,
					"phantomjs-1.9.2-macosx/bin/phantomjs");
		} else if (isLinux64) {
			url = "http://phantomjs.googlecode.com/files/phantomjs-1.9.2-linux-x86_64.tar.bz2";
			phantomJsExe = new File(installDir,
					"phantomjs-1.9.2-linux-x86_64/bin/phantomjs");
		} else {
			url = "http://phantomjs.googlecode.com/files/phantomjs-1.9.2-linux-i686.tar.bz2";
			phantomJsExe = new File(installDir,
					"phantomjs-1.9.2-linux-i686/bin/phantomjs");
		}
		extractExe(url, installDir, phantomJsExe);
		return phantomJsExe;
	}

	private void extractExe(String url, File phantomInstallDir,
			File phantomJsExe) {
		if (phantomJsExe.exists()) {
			return;
		}
		File targetZip = new File(phantomInstallDir, "phantomjs.zip");
		downloadZip(url, targetZip);
		try {
			if (isWindows) {
				unzip(targetZip, phantomInstallDir);
			} else if (isMac) {
				new ProcessBuilder()
						.command("/usr/bin/unzip", "-qo", "phantomjs.zip")
						.directory(phantomInstallDir).start().waitFor();
			} else {
				new ProcessBuilder().command("tar", "-xjvf", "phantomjs.zip")
						.directory(phantomInstallDir).start().waitFor();
			}
		} catch (Exception e) {
			throw new IllegalStateException("Unable to unzip phantomjs from "
					+ targetZip.getAbsolutePath());
		}
	}

	private void downloadZip(String url, File targetZip) {
		if (targetZip.exists()) {
			return;
		}
		File zipTemp = new File(targetZip.getAbsolutePath() + ".temp");
		try {
			zipTemp.getParentFile().mkdirs();
			InputSupplier<InputStream> input = Resources
					.newInputStreamSupplier(URI.create(url).toURL());
			OutputSupplier<FileOutputStream> ouput = Files
					.newOutputStreamSupplier(zipTemp);
			ByteStreams.copy(input, ouput);
		} catch (IOException e) {
			String message = "Unable to download phantomjs from " + url;
			throw new IllegalStateException(message, e);
		}
		zipTemp.renameTo(targetZip);
	}

	private static void unzip(File zip, File toDir) throws IOException {
		try (final ZipFile zipFile = new ZipFile(zip);) {
			Enumeration<? extends ZipEntry> entries = zipFile.entries();
			while (entries.hasMoreElements()) {
				final ZipEntry entry = entries.nextElement();
				if (entry.isDirectory()) {
					continue;
				}
				File to = new File(toDir, entry.getName());
				to.getParentFile().mkdirs();
				InputSupplier<InputStream> from = new InputSupplier<InputStream>() {
					public InputStream getInput() throws IOException {
						return zipFile.getInputStream(entry);
					}
				};
				Files.copy(from, to);
			}
		}
	}
}
