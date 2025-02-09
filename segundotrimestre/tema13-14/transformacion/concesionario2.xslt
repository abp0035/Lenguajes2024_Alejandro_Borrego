<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" indent="yes"/>

    <xsl:template match="/">
        <Vehiculos>
            <xsl:for-each select="concesionario/coche">
                <xsl:sort select="marca" order="descending"/>     <!-- Ordena manualmente por marca -->

                <coche>
                    <modelo><xsl:value-of select="marca"/></modelo>
                    <matricula><xsl:value-of select="@matricula"/></matricula>
                    <metalizado>
                        <xsl:attribute name="color">
                            <xsl:value-of select="color"/>
                        </xsl:attribute>
                        <xsl:value-of select="color/@metalizado"/>
                    </metalizado>
                </coche>
            </xsl:for-each>
        </Vehiculos>
    </xsl:template>
</xsl:stylesheet>
